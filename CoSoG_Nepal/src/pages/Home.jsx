import Header from "../components/Header";
import './Home.css';

function Home() {
    return (
        <>
            <Header />

            <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Coding the Future</h1>
          <p>Empowering Nepal's youth through computer science education</p>
          <button className="cta-button">Join Our Movement</button>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>10+</h3>
          <p>Schools Reached</p>
        </div>
        <div className="stat-card">
          <h3>200+</h3>
          <p>Students Impacted</p>
        </div>
        <div className="stat-card">
          <h3>15+</h3>
          <p>Active Projects</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-content">
          <h2>Our Mission</h2>
          <p>Revolutionizing computer science education throughout Nepal by establishing and supporting CS clubs in secondary schools across remote areas.</p>
        </div>
        <div className="mission-image">
          <img src="/api/placeholder/600/400" alt="Students learning to code" />
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <h2>Our Programs</h2>
        <div className="program-cards">
          <div className="program-card">
            <h3>CS Clubs</h3>
            <p>Student-led computer science clubs in schools</p>
          </div>
          <div className="program-card">
            <h3>Workshops</h3>
            <p>Hands-on coding workshops and training sessions</p>
          </div>
          <div className="program-card">
            <h3>Mentorship</h3>
            <p>One-on-one guidance from industry professionals</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Make a Difference?</h2>
        <p>Join us in shaping the future of tech education in Nepal</p>
        <div className="cta-buttons">
          <button className="cta-button">Volunteer With Us</button>
          <button className="cta-button secondary">Support Our Cause</button>
        </div>
      </section>
    </div>
        </>
    );
}

export default Home;
