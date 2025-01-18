import './AboutUs.css';
import photo from '../components/photo.jpg'
import Header from '../components/Header.jsx'

function AboutUs() {
  return (
    <>
    <Header />
    <div className="about-container">
        
      <div className="about-content">

        <div className="about-image">
          <img 
            src={photo} 
            alt="Cosog Nepal Team" 
          />
        </div>

        <div className="content-section">
          <h1>Who we are?</h1>
          
          <p>
          The National Adolescent Boys Network Nepal (NABN) was founded on 14th Shrawan, 2078 (2021) with the primary objective of ensuring the comprehensive rights of children and adolescents, advocating for gender equality, ending gender-based violence, and empowering the active participation of adolescents in these efforts. The network was established with the clear vision that youth involvement is essential for achieving meaningful change in society.         </p>
          
          <p>
          Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!           </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;