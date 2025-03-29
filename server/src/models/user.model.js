import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    verifyOTP: {
      type: String,
      default: "",
    },
    verifyOTPExpire: {
      type: Number,
      default: 0,
    },
    resetOTP: {
      type: String,
      default: "",
    },
    resetOTPExpire: {
      type: Number,
      default: 0,
    },
    isAccountVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;