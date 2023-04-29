import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import './login.css';


export default function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
              const token = mutationResponse.data.login.token;
           // console.log(mutationResponse);
             Auth.login(token);
        } catch (e) {
            console.log(e);
        }
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
            <div className="p-4 p-md-5 mb-4 rounded text-bg-dark login-bg-img" style={{ height: '25em' }}>
                <div className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">Login</h1>
                    <p className="lead my-3"></p>

                </div>
            </div>


            <div className="row g-5">
                <div className="col-md-8">
                    <h3 className="pb-4 mb-4 fst-italic border-bottom">
                        Please Login
                    </h3>

                    <form onSubmit={handleFormSubmit}>
                        <div className="row mb-3" style={{ marginTop: '4em', marginBottom: '2em' }}>
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-6">
                                <input type="email" name="email" className="form-control" id="inputEmail3" onChange={handleChange} placeholder="youremail@test.com" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-6">
                                <input type="password" name="password" className="form-control" id="inputPassword3" onChange={handleChange} placeholder="******" />
                            </div>

                        </div>
                        {error ? (
                            <div>
                                <p className="error-text">The provided credentials are incorrect</p>
                            </div>
                        ) : null}
                        <div style={{ marginTop: '2em', marginBottom: '4em' }}>
                            <button type="submit" className="btn btn-primary" >Log in</button>
                        </div>

                    </form>
                </div>
            </div>

        </main>


    )
}