import "./Events.css";
import eventsData from "../components/eventsData.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"


export default Events;

function Events() {
  const eventElems = eventsData.map((event) => {
    return (
      <div key={event.id} className="event-card">
        <img src={event.img} alt={event.title} className="event-image" />
        <div className="event-details">
          <p className="date">{event.date}</p>
          <h2 className="event-title">{event.title}</h2>
          <p className="event-description">{event.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="events-page">
      <Header />
      <div className="events-container">{eventElems}</div>
      <Footer />
    </div>
  );
}