import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ["Pending", "Paid"], default: "Pending" }
}, { timestamps: true });

const Bill = mongoose.model("Bill", billSchema);
export default Bill;
