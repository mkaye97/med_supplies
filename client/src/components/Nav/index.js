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
                                <a className="nav-link" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/domation">Make a Donation</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="/products" aria-expanded="false">
                                    Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signup">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={() => Auth.logout()}>Logout</a>
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
                                <a className="nav-link" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signup">Sign Up</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/products">
                                    Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About Us</a>
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