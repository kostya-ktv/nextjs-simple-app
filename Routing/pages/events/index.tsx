import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
   const events = getAllEvents();
   const router = useRouter();

   const findEventHandler = (year: string, month:string) => {
      const fullPath = `/events/${year}/${month}`
      router.push(fullPath)
   }

   return (
     <div>
       <h1>The Home Page</h1>
        <EventsSearch onSearch={findEventHandler}/>
         <EventList items={events}/>
     </div>
   )
 }

export default AllEventsPage
