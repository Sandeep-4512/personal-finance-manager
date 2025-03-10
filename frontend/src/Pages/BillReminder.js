import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const BillReminder = () => {
    const [bills, setBills] = useState([]);
    const [newBill, setNewBill] = useState({ name: '', amount: '', dueDate: '', status: 'Pending' });

    useEffect(() => {
        const savedBills = JSON.parse(localStorage.getItem('bills')) || [];
        setBills(savedBills);
    }, []);

    const addBill = () => {
        const updatedBills = [...bills, newBill];
        setBills(updatedBills);
        localStorage.setItem('bills', JSON.stringify(updatedBills));
        setNewBill({ name: '', amount: '', dueDate: '', status: 'Pending' });
    };

    const markAsPaid = (index) => {
        const updatedBills = [...bills];
        updatedBills[index].status = 'Paid';
        setBills(updatedBills);
        localStorage.setItem('bills', JSON.stringify(updatedBills));
    };

    return (
        <div className="container">
            <h2>Bill Reminder</h2>
            <div className="form-group">
                <input type="text" placeholder="Bill Name" value={newBill.name} onChange={(e) => setNewBill({ ...newBill, name: e.target.value })} />
                <input type="number" placeholder="Amount" value={newBill.amount} onChange={(e) => setNewBill({ ...newBill, amount: e.target.value })} />
                <input type="date" value={newBill.dueDate} onChange={(e) => setNewBill({ ...newBill, dueDate: e.target.value })} />
                <button onClick={addBill}>Add Bill</button>
            </div>
            <h3>Upcoming Bills</h3>
            <ul>
                {bills.map((bill, index) => (
                    <li key={index} className={bill.status === 'Paid' ? 'paid' : 'pending'}>
                        {bill.name} - ${bill.amount} - Due: {bill.dueDate} - Status: {bill.status}
                        {bill.status === 'Pending' && <button onClick={() => markAsPaid(index)}>Mark as Paid</button>}
                    </li>
                ))}
            </ul>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default BillReminder;
