import Link from "next/link"
import { FC } from "react"
import classes from './layout.module.css'

const Header:FC = ({children}) => {
   return(
      <header className={classes.header}>
         <div className={classes.logo}>
            <Link href='/'>NextEvents</Link>
         </div>
         <nav className={classes.navigation}>
           <Link href='/events'>All Events</Link>
         </nav>
      </header>
   )
}
export default Header