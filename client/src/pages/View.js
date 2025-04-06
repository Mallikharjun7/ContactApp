import axios from "axios";
import { useState, useEffect } from "react";
import "./View.css";
import { Link, useNavigate } from "react-router-dom";

function View() {
    const [viewData, setViewData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchFoundData, setSearchFoundData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5400/View");
                setViewData(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        const found = viewData.find((item) => item.name === searchValue);
        setSearchFoundData(found || null);
        setSearchValue("");
    };

    const deleteHandler = async (id) => {
        try {
            await axios.delete(`http://localhost:5400/View/${id}`);
            setViewData((prevData) => prevData.filter((item) => item._id !== id));
            if (searchFoundData?._id === id) setSearchFoundData(null);
        } catch (err) {
            console.log("Error deleting contact:", err);
        }
    };

    const updateHandler = (id) => {
        navigate(`/update/${id}`);
    };

    return (
        
        <div className="contacts-container">
            {/* Search Form */}
            <form className="formBox" onSubmit={searchSubmitHandler}>
                <div className="searchBox">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search contacts..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button className="searchButton" type="submit">Search</button>
                </div>
            </form>

            {/* Display Search Result or Full List */}
            {searchFoundData ? (
                <div className="contact-box">
                    <Link className="linkTag" to={`/View/${searchFoundData._id}`}>
                        <div className="Viewprofile-icon">👤</div>
                        <div className="contact-details">
                            <p className="Viewcontact-name">{searchFoundData.name}</p>
                            <p className="contact-number">{searchFoundData.number}</p>
                        </div>
                    </Link>
                    <div className="btnBox">
                        <button className="deletBtn" onClick={() => deleteHandler(searchFoundData._id)}>Delete</button>
                        <button className="updateBtnView" onClick={() => updateHandler(searchFoundData._id)}>Update</button>
                    </div>
                </div>
            ) : (
                viewData.map((item) => (
                    <div key={item._id} className="contact-box">
                        {/* Clicking this opens single contact */}
                        <Link className="linkTag" to={`/View/${item._id}`}>
                      
                            <div className="Viewprofile-icon">👤</div>
                            <div className="contact-details">
                                <p className="Viewcontact-name">{item.name}</p>
                                <p className="contact-number">{item.number}</p>
                        </div>
                        </Link>
                        {/* Separate buttons to avoid opening single contact page */}
                        <div className="btnBox">
                        <button className="deletBtn" onClick={() => deleteHandler(item._id)}>Delete</button>
                        <button className="updateBtnView" onClick={() => updateHandler(item._id)}>Update</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default View;
