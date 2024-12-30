import mongoose from "mongoose";

// Event listeners for better debugging
mongoose.connection.on("connected", () => {
    console.log("MongoDB connected successfully.");
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected.");
});

// Connect to the database
const connectDB = async () => {
    const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/e-commerce'; // Use 127.0.0.1 instead of ::1
    
    try {
        await mongoose.connect(dbURI, {
            // Removed deprecated options
        });

        console.log(`MongoDB connection established to ${dbURI}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit the process with failure
    }
};

// Gracefully close connection on process termination
process.on("SIGINT", async () => {
    try {
        await mongoose.connection.close();
        console.log("MongoDB connection closed due to application termination.");
        process.exit(0); // Exit cleanly
    } catch (error) {
        console.error("Error during MongoDB disconnection:", error.message);
        process.exit(1);
    }
});

export default connectDB;

