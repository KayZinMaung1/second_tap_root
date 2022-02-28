import styles from "./Footer.module.css";
const Footer = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.icon}><i className="fa-brands fa-facebook"></i></div>
                <div className={styles.icon}><i className="fa-brands fa-telegram"></i></div>
                <div className={styles.icon}><i className="fa-brands fa-viber"></i></div>
            </div>
            <div className={styles.subcontainer}>
                <div className={styles.link}>About Us</div>
                <div className={styles.link}>Blog</div>
                <div className={styles.link}>Contact Us</div>
                <div className={styles.link}>Gallery</div>
            </div>
            <hr className={styles.line}></hr>
            <div className={styles.subcontainer}>
                <div className={styles.text}>All Rights Reserved by Second Tap Root</div>
                <div className={styles.upicon}><i className="fa-solid fa-angle-up"></i></div>
                </div>
        </div>
     );
}
 
export default Footer;