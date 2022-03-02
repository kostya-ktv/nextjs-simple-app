import { FC } from "react"
import { DummyEventType} from "../../dummy-data"
import EventItem from "./EventItem"
import styles from './event.module.css'
interface Props {
items: Array<DummyEventType>
}

const EventList:FC<Props> = ({items}) => {

   return(
      <ul className={styles.ul}>
         {items.map((event, index) => <EventItem item={event} key={index}/>)}
      </ul>
   )
}

export default EventList