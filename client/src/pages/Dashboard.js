import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import './dashboard.css';


export default class Dashboard extends Component {
    render() {
        return (

            <main className="container">
                <div className="p-4 p-md-5 mb-4 rounded text-bg-dark login-bg-img" style={{ height: '25em' }}>
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 fst-italic">Dashboard</h1>
                        <p className="lead my-3"></p>

                    </div>
                </div>


                <div className="row g-5">
                    <div className="col-md-8">
                        <h3 className="pb-4 mb-4 fst-italic border-bottom">
                            Dashboard
                        </h3>


                    </div>
                </div>


                <Plot
                    data={[
                        {
                            x: [1, 2, 3],
                            y: [2, 6, 3],
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                        },
                        { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                    ]}
                    layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
                />
            </main>
        );
    }
}