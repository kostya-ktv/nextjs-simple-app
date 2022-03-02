import { FC, ReactNode } from 'react';
import classes from './logisticsItem.module.css';
interface Props {
  children: ReactNode,
  icon: JSX.Element
}
const LogisticsItem:FC<Props> = ({children, icon}) => {
const Icon = icon
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        {icon}
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
