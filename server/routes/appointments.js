import express from 'express';
import Appointment from '../models/Appointment.js';
import { sendAppointmentConfirmation } from '../utils/emailService.js';

const router = express.Router();

// Create appointment
router.post('/', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    
    // Send confirmation email
    await sendAppointmentConfirmation(
      req.body.patientEmail,
      req.body.patientName,
      req.body.date,
      req.body.time
    );
    
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get appointments for a patient
router.get('/patient/:email', async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientEmail: req.params.email })
      .populate('doctorId');
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;