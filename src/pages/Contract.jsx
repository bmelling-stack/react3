import React, { Component } from 'react';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';

function Contract() {
    return (
        <div>
            <Header />
            <main>
                <h2>Contract</h2>
                <p> I, Brian J. Mellinger agree to abide by the terms in my Fall 2025 ITIS 3135 053 Front-End Web Application Development course 
                    with my instructor, D.I. von Briesen. I understand that all work that I do on my school and personal websites will be 
                    publicly available to the world. I will not put information there that is inappropriate for schoolwork, or that I wish to keep private.
                        Signed:
                                <i>Brian J. Mellinger, 31 August 2025</i>
                </p>
            </main>
            <Footer />
        </div>
    );
}

export default Contract;
