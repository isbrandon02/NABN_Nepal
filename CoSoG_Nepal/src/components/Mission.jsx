import './Mission.css'

// SVG Icons Components
const CodeIcon = () => (
    <svg className="mission-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 18L22 12L16 6" />
      <path d="M8 6L2 12L8 18" />
    </svg>
  );
  
const UsersIcon = () => (
  <svg className="mission-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="mission-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
  

function Mission() {
  return(
    <section className="mission-section">
    <div className="container">
      <div className="mission-grid">
        <div className="mission-card">
          <CodeIcon />
          <h3 className="mission-title">Learn to Code</h3>
          <p className="mission-description">
            Practical coding education for the next generation of developers
          </p>
        </div>
        <div className="mission-card">
          <UsersIcon />
          <h3 className="mission-title">Community</h3>
          <p className="mission-description">
            Building a supportive network of young tech enthusiasts
          </p>
        </div>
        <div className="mission-card">
          <GlobeIcon />
          <h3 className="mission-title">Global Impact</h3>
          <p className="mission-description">
            Connecting Nepal's youth to global opportunities
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Mission
