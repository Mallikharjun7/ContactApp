import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Add.css";

function Add() {
    const navigate = useNavigate(); // Initialize useNavigate

    const [data, setData] = useState({
        name: "",
        number: "",
        relation: "",
        village: "",
    });

    const dataHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5400/Add", data);
            console.log(response.data);

            // Reset form data
            setData({
                name: "",
                number: "",
                relation: "",
                village: "",
            });

            // Navigate to the "View" page after successful submission
            navigate("/View");
        } catch (err) {
            console.log(err);
            alert("Failed to save contact. Please try again.");
        }
    };

    return (
        <>
            <div className="message">Adding a contact is adding a connection! 😊</div>
            <div className="form-container">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input value={data.name} onChange={dataHandler} type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input value={data.number} onChange={dataHandler} type="tel" id="phone" name="number" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="relationship">Relationship:</label>
                        <input value={data.relation} onChange={dataHandler} type="text" id="relationship" name="relation" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="village">Village:</label>
                        <input value={data.village} onChange={dataHandler} type="text" id="village" name="village" required />
                    </div>
                    <button type="submit" className="addBtn">Save Contact</button>
                </form>
            </div>
        </>
    );
}

export default Add;
