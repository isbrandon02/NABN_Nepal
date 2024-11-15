import React from 'react';

function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>Empowering Adolescent Boys in Nepal</h1>
                    <p>Supporting mental health, education, and social well-being for a brighter future.</p>
                </div>
            </section>

            <section className="about">
                <h2>About NABN Nepal</h2>
                <p>The National Adolescent Boys' Network Nepal is dedicated to improving the well-being of adolescent boys by providing programs focused on education, mental health, and gender equality.</p>
            </section>

            <footer className="footer">
                <p>&copy; 2024 National Adolescent Boys' Network Nepal. All rights reserved.</p>
                <div className="social-media-links">
                    <a href="https://www.facebook.com/nabn.nepal" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
            </footer>
        </>
    );
}

export default Home;
