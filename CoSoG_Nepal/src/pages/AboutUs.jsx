import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Hero Image */}
        <div className="hero-image">
          <img 
            src="./photo.jpg" 
            alt="Cosog Nepal Team" 
          />
        </div>

        {/* Who we are section */}
        <div className="content-section">
          <h1>Who we are?</h1>
          
          <p>
            Cosog Nepal, also known as Coding for Social Good, is a student-driven non-profit organization founded in May 2022. Based in Kathmandu, Nepal, we are dedicated to revolutionizing computer science education throughout the country. Our primary focus is enabling students to initiate and manage Computer Science clubs in secondary and high schools across remote areas, creating a vibrant community of young tech enthusiasts.
          </p>
          
          <p>
            Our work extends beyond education; we are deeply involved in charitable coding initiatives, contributing to Nepal's digitalization. As a bridge between traditional values and modern technology, we are uniquely positioned to foster a blend of learning and innovation for social good, placing us at the forefront of Nepal's tech education revolution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;