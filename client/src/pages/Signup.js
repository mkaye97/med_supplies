import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';


export default function Signup(props) {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };


    return (
        <main className="container">
            <div className="p-4 p-md-5 mb-4 rounded text-bg-dark" style={{ height: '25em' }}>
                <div className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">Sign Up</h1>
                    <p className="lead my-3"></p>

                </div>
            </div>


            <div className="row g-5">
                <div className="col-md-8">
                    <h3 className="pb-4 mb-4 fst-italic border-bottom">
                        Please Sign Up
                    </h3>

                    <form onSubmit={handleFormSubmit}>
                        <div className="row mb-3">
                            <label forHtml="firstName" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" name="firstName"
                                    id="firstName"
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label forHtml="inputLastname3" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" name="lastName"
                                    id="lastName"
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label forHtml="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-6">
                                <input type="email" className="form-control" placeholder="youremail@test.com"
                                    name="email"
                                    id="email"
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label forHtml="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-6">
                                <input type="password" className="form-control" placeholder="******"
                                    name="password"
                                    id="pwd"
                                    onChange={handleChange} />
                            </div>

                        </div>
                        <div style={{ marginTop: '2em', marginBottom: '4em' }}>
                            <button type="submit" className="btn btn-primary" >Sign in</button>
                        </div>

                    </form>
                </div>
            </div>

        </main>


    )
}