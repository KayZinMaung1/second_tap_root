import { useState } from "react";
import styles from './Navbar.module.css';
import { Button } from "../Button";
const Navbar = () => {
    const[clicked,setClicked] = useState(false);
    const handleClick =()=>{
        setClicked(!clicked);
    }
    return ( 
        <nav className={styles.NavbarItems}>
            <h1 className={styles.navbar_logo}>React<i className="fab fa-react"></i></h1>
            <div className={styles.menu_icon} onClick={handleClick}>
                <i className={clicked? 'fas fa-times' :'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? [styles.nav_menu, styles.nav_menu_active].join(" ") : styles.nav_menu}>
                <li>
                    <a className={styles.nav_links}>Home</a>
                </li>
                <li>
                    <a className={styles.nav_links}>About Us</a>
                </li>
                <li>
                    <a className={styles.nav_links}>Blogs</a>
                </li>
                <li>
                    <a className={styles.nav_links}>Gallery</a>
                </li>
                <li>
                    <a className={styles.nav_links_mobile}>Contact Us</a>
                </li>
            </ul>
            <Button>Sign Up</Button>
        </nav>
     );
}
 
export default Navbar;