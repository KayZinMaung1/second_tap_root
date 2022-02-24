import { useState } from "react";
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    const[clicked,setClicked] = useState(false);
    const handleClick =()=>{
        setClicked(!clicked);
    }
    return ( 
        <nav className={styles.NavbarItems}>
            <div className={styles.navlogopostition}>
                    <Link to="/" className={styles.link}>
                        <img src={process.env.PUBLIC_URL + 'images/logo.jpg'} alt="Logo" width={50} height={50} className={styles.navlogo}/>
                        <p className={styles.nav_logo_text}>
                        Second Tap Root <br></br>
                        ဒုတိယရေသောက်မြစ်</p>
                    </Link>
            </div>
            <div className={styles.menu_icon} onClick={handleClick}>
                <i className={clicked? 'fas fa-times' :'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? [styles.nav_menu, styles.nav_menu_active].join(" ") : styles.nav_menu}>
                <li>
                    <Link to="/" className={styles.link}>
                    <p className={styles.nav_links} >Home</p>
                    </Link>
                </li>
                <li>
                    <Link to="/" className={styles.link}>
                    <p className={styles.nav_links} >About Us</p>
                    </Link>
                </li>
                <li>
                <Link to="/" className={styles.link}>
                    <p className={styles.nav_links} >Blogs</p>
                    </Link>
                </li>
                <li>
                <Link to="/" className={styles.link}>
                    <p className={styles.nav_links} >Gallery</p>
                    </Link>
                </li>
                <li>
                <Link to="/" className={styles.link}>
                    <p className={styles.nav_links_mobile} >Contact Us</p>
                    </Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;