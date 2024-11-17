import eventsData from "./eventsData"
import "./EventsSection.css"

function EventsSection() {

    const eventElements = eventsData.map((event) => {
        return(
            <div key={event.id} className="event--container">
                <img src={event.img} className="events--image"/>
                <div className="event--overlay">
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                </div>
            </div>
        )
    })

    return(
        <div className="events">
            <div className="events--header">
                <h3>EVENTS</h3>
                <p><a>VIEW ALL</a></p>
            </div>
            <div className="events--images">
              {eventElements}
            </div>


        </div>
    )
}

export default EventsSection