import Link from "next/link";
import { useRouter } from "next/router"
import Button from "../../components/button/Button";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/ResultsTitle/ResultsTitle";
import { getFilteredEvents } from "../../dummy-data";
import '../../styles/Home.module.css'
const FilteredEventsPage = () => {
   const router = useRouter()
   const filterData = router.query.slug;
   
   if(!filterData) return <p>Loading...</p>
   
      const filteredYear = +filterData[0]
      const filteredMonth = +filterData[1]
      if(filteredYear > 2030 || filteredYear < 2021 || filteredMonth > 12 || filteredMonth < 1){
         return <p>Invalid filter</p>
      }
      const filteredEvents = getFilteredEvents({year: filteredYear, month: filteredMonth})

      if(!filteredEvents || filteredEvents.length === 0) return (<>    
      <p>
         <Button title="Show all events" link="/events"/> no events found for chose filter
      </p>
      </>
      )

   
   return(
      <>
      <ResultsTitle date={new Date(filteredYear, filteredMonth - 1)}/>
         <EventList items={filteredEvents}/>
      </>
   )
}
export default FilteredEventsPage