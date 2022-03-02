import { useRouter } from "next/router"
import EventContent from "../../components/events/EventContent";
import EventLogistics from "../../components/events/EventLogistics";
import EventSummary from "../../components/events/EventSummary";
import { getEventById } from "../../dummy-data";

const EventDetailPage = () => {

   const {event: eventId}:any  = useRouter().query
 
   const event = getEventById(eventId)

   if(!event) return <p>Event not found!</p>

   const {date, location, image, title, description} = event
   return(
      <>
         <EventSummary title={title}/>
         <EventLogistics 
            address={location}
            date={date}
            image={image}
            imageAlt={title}
         />
         <EventContent>
            {<p>{description}</p>}
         </EventContent>
      </>
   )
}

export default EventDetailPage