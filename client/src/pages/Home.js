import * as React from 'react';


export default function Home() {

    return (
        <main className=" container d-flex mx-auto flex-column bg-dark" style={{ marginBottom: '2em' }}>
            <div className="bg-dark text-center text-bg-dark" style={{ height: '800px' }}>
                <h1 style={{ marginLeft: '3em', marginTop: '2em', }}>Cover your page.</h1>
                <p class="lead" style={{ marginLeft: '6em', marginTop: '2em' }}>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                <p class="lead" style={{ marginLeft: '6em', marginTop: '2em' }}>
                    <a href="/products" class="btn btn-lg btn-secondary fw-bold border-white bg-white">View Products</a>
                </p>
            </div>
        </main>
    )
};
