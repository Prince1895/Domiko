import mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}domiko`);
    } catch (error) {
        console.log(error.message);
    }
};

mongoose.connection.on('connected', () => console.log("database connected"));
mongoose.connection.on('error', (err) => console.log("MongoDB connection error:", err));

export default connectDB;