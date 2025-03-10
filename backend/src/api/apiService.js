const BASE_URL = "http://localhost:5000/api";

// Bills API Requests
export const addBill = async (billData) => {
    const response = await fetch(`${BASE_URL}/bills/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(billData),
    });
    return response.json();
};

export const getBills = async () => {
    const response = await fetch(`${BASE_URL}/bills`);
    return response.json();
};

export const updateBillStatus = async (id, status) => {
    const response = await fetch(`${BASE_URL}/bills/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
    });
    return response.json();
};

export const deleteBill = async (id) => {
    const response = await fetch(`${BASE_URL}/bills/delete/${id}`, {
        method: "DELETE",
    });
    return response.json();
};

// Transactions API Requests
export const addTransaction = async (transactionData) => {
    const response = await fetch(`${BASE_URL}/transactions/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transactionData),
    });
    return response.json();
};

export const getTransactions = async () => {
    const response = await fetch(`${BASE_URL}/transactions`);
    return response.json();
};
