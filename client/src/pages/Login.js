import * as React from 'react';


export default function Login() {

    return (
        <main className="container">
            <div className="p-4 p-md-5 mb-4 rounded text-bg-dark" style={{height:'25em'}}>
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

                    <form>
                        <div className="row mb-3" style={{ marginTop: '4em', marginBottom: '2em' }}>
                            <label forHtml="inputUsername3" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="inputUsername3" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label forHtml="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-6">
                                <input type="password" className="form-control" id="inputPassword3" />
                            </div>

                        </div>
                        <div style={{ marginTop: '2em', marginBottom: '4em' }}>
                            <button type="submit" className="btn btn-primary" >Log in</button>
                        </div>

                    </form>
                </div>
            </div>

        </main>


    )
}