import express from 'express';
import Doctor from '../models/Doctor.js';

const router = express.Router();

// Get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get doctor availability
router.get('/:id/availability', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    res.json(doctor.availability);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;