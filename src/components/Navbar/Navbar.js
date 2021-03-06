import { useState } from "react";
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";
import UpBar from "./UpBar";


const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <div className={styles.container}>
            <UpBar/>
            <nav className={styles.navbar}>
                <Link to="/" className={styles.navtitle}>
                    <img
                        src='/images/logo.jpg'
                        alt="Second Tap Root"
                        className={styles.navlogo}
                    />
                    <p>
                        Second Tap Root <br />
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
                        <Link to="/aboutus" className={styles.navlinks} onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link to="/blogs" className={styles.navlinks} onClick={closeMobileMenu}>
                            Blogs
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link to="/gallery" className={styles.navlinks} onClick={closeMobileMenu}>
                            Gallery
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link to="/contactus" className={styles.navlinks} onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;