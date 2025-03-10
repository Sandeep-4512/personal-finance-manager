import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Change if needed

// User Authentication APIs
export const loginAPI = (userData) => axios.post(`${API_BASE_URL}/auth/login`, userData);
export const registerAPI = (userData) => axios.post(`${API_BASE_URL}/auth/register`, userData);

// Avatar API
export const setAvatarAPI = (avatarData) => axios.post(`${API_BASE_URL}/user/avatar`, avatarData);

// Transactions APIs
export const editTransactions = (id, transactionData) => 
  axios.put(`${API_BASE_URL}/transactions/${id}`, transactionData);

export const deleteTransactions = (id) => axios.delete(`${API_BASE_URL}/transactions/${id}`);

// Existing API exports
export const addBill = (billData) => axios.post(`${API_BASE_URL}/bills`, billData);
export const getBills = () => axios.get(`${API_BASE_URL}/bills`);
export const addTransaction = (transactionData) => axios.post(`${API_BASE_URL}/transactions`, transactionData);
export const getTransactions = () => axios.get(`${API_BASE_URL}/transactions`);
