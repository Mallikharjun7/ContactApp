import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./SingleContact.css";



function SingleContact() {

    const { id } = useParams(); // Get the contact ID from the URL
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
            } catch (error) {
                console.error("Error fetching contact:", error);
            }
        };

        fetchContact();
    }, [id]);

    if (!contact) {
        return <div className="loading">Loading Contact...</div>;
    }


    
    return (
        <div className="contact-container">
            <div className="contact-card">
                <div className="profile-icon">👤</div>
                <h2 className="contact-name">{contact.name}</h2>
                <p className="contact-detail">
                    <strong>📞 Number:</strong> {contact.number}
                </p>
                <p className="contact-detail">
                    <strong>👨‍👩‍👧‍👦 Relation:</strong> {contact.relation}
                </p>
                <p className="contact-detail">
                    <strong>🏡 Village:</strong> {contact.village}
                </p>

                <button className="back-button" onClick={() => window.history.back()}>
                    ⬅️ Go Back
                </button>

            </div>
        </div>
    );
}

export default SingleContact;
