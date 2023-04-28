import * as React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";


export default function Nav() {


    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"><img src="/favicon.ico" alt="medhub logo" width="30" height="24" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/domation">Make a Donation</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/products" aria-expanded="false">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#" onClick={() => Auth.logout()}>Logout</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            )

        } else {
            return (
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"><img src="/favicon.ico" alt="medhub logo" width="30" height="24" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Sign Up</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/products">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
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