import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  image: String,
  consultationFee: {
    type: Number,
    required: true
  },
  availability: [{
    day: String,
    slots: [String]
  }]
});

export default mongoose.model('Doctor', doctorSchema);