import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}domiko`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000, // important for Vercel cold start
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
    process.exit(1); // Exit if DB fails
  }
};

// Mongoose connection listeners (optional but helpful for logs)
mongoose.connection.on('connected', () => console.log("Mongoose connected"));
mongoose.connection.on('error', (err) => console.log("MongoDB connection error:", err));

export default connectDB;
