import Bill from "../models/billModel.js";

export const addBillController = async (req, res) => {
    try {
        const { name, amount, dueDate, status } = req.body;
        const newBill = new Bill({ name, amount, dueDate, status });
        await newBill.save();
        res.status(201).json({ message: "Bill added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getBillsController = async (req, res) => {
    try {
        const bills = await Bill.find();
        res.status(200).json(bills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateBillStatusController = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        await Bill.findByIdAndUpdate(id, { status });
        res.status(200).json({ message: "Bill status updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteBillController = async (req, res) => {
    try {
        const { id } = req.params;
        await Bill.findByIdAndDelete(id);
        res.status(200).json({ message: "Bill deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
