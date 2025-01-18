import './AboutUs.css';
import photo from '../components/photo.jpg'
import Header from '../components/Header.jsx'
import Footer from "../components/Footer.jsx"


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
          <h1>Who are we?</h1>
          
          <p>
          The National Adolescent Network Nepal was established on Shrawan 14, 2078 BS, with the main objective of ensuring adolescent participation in advocating for and securing the overall rights of children and adolescents, as well as ending gender-based violence and promoting gender equality. Since its establishment, the network has been consistently working effectively to protect child and adolescent rights. It has organized various online and offline programs across the country, including life skills training, capacity building for adolescents, sexual and reproductive rights, mental health rights, climate justice and rights for adolescents, online safety rights for children and adolescents, and efforts to reduce child marriage. 
        </p>
          
          <p>
          The network has been collaborating with government and non-governmental organizations to advocate for and ensure the rights of adolescents. It actively monitors the government’s laws, policies, and national plans related to children and adolescents, raising and addressing adolescent issues, voices, and rights. Recently, the network has focused on addressing gender-based violence and abuse against boys, highlighting the fact that boys can also be victims of rape, making it a campaign for advocacy, debate, and awareness. 
         </p>

         <p>
         Currently, the central committee of the network consists of 23 members, ensuring meaningful adolescent participation from all seven provinces of Nepal, with provincial adolescent networks also established in each province.
         </p>

        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;