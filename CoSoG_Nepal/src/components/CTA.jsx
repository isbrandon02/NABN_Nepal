import '../components/CTA.css'

function CTA() {
    return (     
      <section className="cta-section">
      <div className="container">
        <h2 className="cta-title">Ready to Make a Difference?</h2>
        <p className="cta-description">
          Join us in empowering Nepal's youth through technology education
        </p>
        <div>
          <button className="button button-primary">
            Donate Now
          </button>
          <button className="button button-secondary">
            Volunteer
          </button>
        </div>
      </div>
    </section>
    )
}

export default CTA