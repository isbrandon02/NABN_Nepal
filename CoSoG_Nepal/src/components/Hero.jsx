import './Hero.css'
import herophoto from './photo.jpg'

function Hero() {
    return (
        <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                National Adolescent Boys Network Nepal
              </h1>
              <p className="hero-description">
                Empowering Nepal's youth
              </p>
              <button className="button button-primary">
                Join our community
              </button>
            </div>
            <div className="hero-image">
              <img src={herophoto} alt="NDBN Nepal Logo" />
            </div>
          </div>
        </div>
      </section>
      )
}

export default Hero
