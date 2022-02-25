import { useState } from "react";
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";
import logo from '../../images/logo.jpg';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.navtitle}>
                <img
                    src={logo}
                    alt="Second Tap Root"
                    className={styles.navlogo}
                />
                <p>
                        Second Tap Root <br/>
                        ဒုတိယရေသောက်မြစ်
                </p>
            </Link>
            <div className={styles.menuicon} onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul
                className={
                    click ? [styles.navmenu, styles.active].join(" ") : styles.navmenu
                }
            >

                <li className={styles.navitem}>
                    <Link to="/" className={styles.navlinks} onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link to="/courses/japan" className={styles.navlinks} onClick={closeMobileMenu}>
                        About Us
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link to="/courses/it" className={styles.navlinks} onClick={closeMobileMenu}>
                        Blogs
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link to="/news" className={styles.navlinks} onClick={closeMobileMenu}>
                        Gallery
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link to="/about" className={styles.navlinks} onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;