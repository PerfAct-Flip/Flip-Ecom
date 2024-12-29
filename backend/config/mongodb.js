import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Event listeners for better debugging
        mongoose.connection.on("connected", () => {
            console.log("Database connected successfully.");
        });

        mongoose.connection.on("error", (err) => {
            console.error("Database connection error:", err);
        });

        mongoose.connection.on("disconnected", () => {
            console.log("Database disconnected.");
        });

        // Connect to the database
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connection established.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
    }
};

// Close connection on process termination
process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed due to application termination.");
    process.exit(0);
});

export default connectDB;
