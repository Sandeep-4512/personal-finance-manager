import express from "express";
import { addTransaction, getTransactions } from "../controllers/transactionController.js";
import { addBillController, getBillsController, updateBillStatusController, deleteBillController } from "../controllers/billController.js";

const router = express.Router();

// Transaction Routes
router.post("/transactions/add", addTransaction);
router.get("/transactions", getTransactions);

// Bill Routes
router.post("/bills/add", addBillController);
router.get("/bills", getBillsController);
router.put("/bills/update/:id", updateBillStatusController);
router.delete("/bills/delete/:id", deleteBillController);

export default router;
