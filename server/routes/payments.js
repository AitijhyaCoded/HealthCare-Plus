import express from 'express';
import Stripe from 'stripe';
import Appointment from '../models/Appointment.js';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create payment intent
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointment = await Appointment.findById(appointmentId).populate('doctorId');
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: appointment.doctorId.consultationFee * 100, // Convert to cents
      currency: 'usd',
      metadata: {
        appointmentId: appointmentId
      }
    });
    
    appointment.paymentIntentId = paymentIntent.id;
    await appointment.save();
    
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Webhook to handle successful payments
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }
  
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    const appointment = await Appointment.findOne({
      paymentIntentId: paymentIntent.id
    });
    
    if (appointment) {
      appointment.paymentStatus = 'completed';
      appointment.status = 'confirmed';
      await appointment.save();
    }
  }
  
  res.json({ received: true });
});

export default router;