/* eslint-disable @next/next/no-img-element */

import { FC } from 'react';
import { Interface } from 'readline';
import DateIcon from '../icons/DateIcon';
import LocationIcon from '../icons/LocationIcon';
import classes from './event-logistics.module.css';
import LogisticsItem from './LogisticsItem';

interface Props {
  date: string,
  address: string,
  image: string,
  imageAlt: string
}
const EventLogistics:FC<Props> = ({ date, address, image, imageAlt }) => {
 
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={<DateIcon/>}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={<LocationIcon/>}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
