import Link from "next/link"
import { FC } from "react"
import styles from './button.module.css'
interface Props {
   link?: string,
   title?: string,
   onClick?: ()=>void
}
const Button:FC<Props> = ({link, children, title, onClick}) => {

   if(link) {
      return(
      <Link href={link} passHref>
         <div className={styles.button}>
            <span>{title}</span>
            <span>{children}</span>
         </div>
      </Link>
   )}
   return <button className={styles.button} onClick={onClick}>{children}</button>
   
}

export default Button