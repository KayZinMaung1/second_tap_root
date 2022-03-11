import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={styles.subcontainer}>
                <a href="https://www.facebook.com/" target="_blank">
                    <div className={styles.icon}><i className="fa-brands fa-facebook"></i></div>
                </a>
                <a href="https://web.telegram.org/z/" target="_blank">
                    <div className={styles.icon}><i className="fa-brands fa-telegram"></i></div>
                </a>
                <a href="https://www.viber.com/en/" target="_blank">
                <div className={styles.icon}><i className="fa-brands fa-viber"></i></div>
                </a>
            </div>
            <div className={styles.subcontainer}>
                 <Link to="/aboutus" style={{textDecoration: 0}}>
                     <div className={styles.link}>About Us</div>
                </Link>
                <Link to="/blogs" style={{textDecoration: 0}}>
                     <div className={styles.link}>Blogs</div>
                </Link>
                <Link to="/gallery"  style={{textDecoration: 0}}>
                     <div className={styles.link}>Gallery</div>
                </Link>
                <Link to="/contactus"  style={{textDecoration: 0}}>
                     <div className={styles.link}>Contact Us</div>
                </Link>
            </div>
            <hr className={styles.line}></hr>
            <div className={styles.subcontainer}>
                <div className={styles.text}>All Rights Reserved by Second Tap Root</div>
                <div className={styles.upicon}><i className="fa-solid fa-angle-up"></i></div>
            </div>
        </footer>
     );
}
 
export default Footer;