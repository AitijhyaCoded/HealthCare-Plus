import nodemailer from 'nodemailer';
import { format } from 'date-fns';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendAppointmentConfirmation = async (
  patientEmail,
  patientName,
  date,
  time
) => {
  const formattedDate = format(new Date(date), 'MMMM do, yyyy');
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: patientEmail,
    cc: 'raitijhya005@gmail.com',
    subject: 'Appointment Confirmation - HealthCare+',
    html: `
      <h1>Appointment Confirmation</h1>
      <p>Dear ${patientName},</p>
      <p>Your appointment has been scheduled for ${formattedDate} at ${time}.</p>
      <p>Please arrive 15 minutes before your scheduled time.</p>
      <p>Best regards,<br>HealthCare+ Team</p>
    `
  };
  
  await transporter.sendMail(mailOptions);
};