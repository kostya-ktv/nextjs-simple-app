/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { DummyEventType } from "../../dummy-data"
import Button from "../button/Button"
import ArrowRightIcon from "../icons/ArrowRightIcon"
import DateIcon from "../icons/DateIcon"
import LocationIcon from "../icons/LocationIcon"
import styles from './event.module.css'

interface Props {
item: DummyEventType
}
const EventItem:FC<Props> = ({item}) => {
   const {title, image, date, location, id } = item
   const readableDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
   })
   const readableAddress = location.replace(', ', '\n')
   const exploreLink = `/events/${id}`

   return(
      <li className={styles.li}>
         <img src={'/' + image} alt={title} className={styles.image}/>
         <div className={styles.info}>
            <div>
               <h2>{title}</h2>
               <div>
                  <time className={styles.time}>
                  <DateIcon/>
                     {readableDate}
                  </time>
               </div>
            </div>
            <div>
               <address className={styles.address}>
               <LocationIcon/>
                  {readableAddress}
               </address>
            </div>
            <Button link={exploreLink} title="Explore">
               <ArrowRightIcon/>      
            </Button>
         </div>
      </li>
   )
}

export default EventItem