import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, date, email, phone, time } = req.body;
  if (!firstName || !lastName || !date || !email || !phone || !time) {
    return next(new ErrorHandler("All Fields Are Required!", 400));
  }
  try {
    await Reservation.create({firstName, lastName, date, email, phone, time});
    res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationError = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationError.join(' , '), 400))
    }
  }
};
