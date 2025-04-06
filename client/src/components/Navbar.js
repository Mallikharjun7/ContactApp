import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">ContactApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav m-2 pe-3 ps-3">
                            <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            <Link to="/View" className="nav-link" href="#">View</Link>
                            <Link to="/Add" className="nav-link" href="#">Add</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;