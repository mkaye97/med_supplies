import * as React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";


export default function Nav() {


    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="/favicon.ico" alt="medhub logo" width="30" height="24" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Make a Donation</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/Weelchairs">Wheelchairs</a></li>
                                    <li><a className="dropdown-item" href="/First Aid">First Aid</a></li>
                                    <li><a className="dropdown-item" href="/Devices">Devices</a></li>
                                    <li><a className="dropdown-item" href="/PPE">PPE</a></li>
                                    <li><a className="dropdown-item" href="/Books">Books</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )

        } else {
            return (
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="/favicon.ico" alt="medhub logo" width="30" height="24" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign Up</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Wheelchairs</a></li>
                                    <li><a className="dropdown-item" href="#">First Aid</a></li>
                                    <li><a className="dropdown-item" href="#">Devices</a></li>
                                    <li><a className="dropdown-item" href="#">PPE</a></li>
                                    <li><a className="dropdown-item" href="#">Books</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            )
        }
    }






    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top shadow p-3 mb-5" style={{ backgroundColor: '#e3f2fd' }}>
                {showNavigation()}
            </nav>
        </header>
    )
}