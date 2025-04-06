import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Update.css";

function Update() {
    const { id } = useParams(); // Get ID from URL
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: "",
        number: "",
        relation: "",
        village: ""
    });

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await axios.get(`http://localhost:5400/View/${id}`);
                setContact(response.data);
            } catch (err) {
                console.log("Error fetching contact:", err);
            }
        };
        fetchContact();
    }, [id]);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5400/View/${id}`, contact);
            navigate("/"); // Redirect to home page after update
        } catch (err) {
            console.log("Error updating contact:", err);
        }
    };

    return (
        <div className="update-container">
            <h2>Update Contact</h2>
            <form onSubmit={handleUpdate}>
                <label>Name:</label>
                <input type="text" name="name" value={contact.name} onChange={handleChange} required />

                <label>Number:</label>
                <input type="text" name="number" value={contact.number} onChange={handleChange} required />

                <label>Relation:</label>
                <input type="text" name="relation" value={contact.relation} onChange={handleChange} />

                <label>Village:</label>
                <input type="text" name="village" value={contact.village} onChange={handleChange} />

                <button className="updateBtn" type="submit">Update</button>
            </form>
        </div>
    );
}

export default Update;
