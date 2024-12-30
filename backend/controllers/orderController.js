import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing orders (Cash on Delivery or Payment-Disabled Mode)
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address, paymentMethod } = req.body; // Destructuring order details

        // Prepare order data (No payment processing)
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: paymentMethod || "COD", // Default to COD if no payment method is provided
            payment: false, // Payment is not processed
            date: Date.now(),
            status: 'enabled', // Default status
        };

        // Save the order to the database
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Clear the user's cart after placing the order
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        // Send success response
        res.json({ success: true, message: "Order Placed", order: newOrder });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message }); // Send error response
    }
};

// Fetch all orders for admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({}); // Fetch all orders
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Fetch user-specific orders for frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body; // Destructuring userId
        const orders = await orderModel.find({ userId }); // Fetch user orders
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Update order status from admin panel
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body; // Destructuring order details
        await orderModel.findByIdAndUpdate(orderId, { status }); // Update status
        res.json({ success: true, message: 'Status Updated' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export {
    placeOrder,
    allOrders,
    userOrders,
    updateStatus,
};
