import styles from './Contact.module.css';

const Contact = () => {
    return ( 
        <div className={styles.container}>
        
            <div className={styles.contactuscontainer}>
                <div className={styles.title}><center>CONTACT US</center></div>
                <div className={styles.subcontainer}>
                    <div className={styles.textcontainer}>
                        <p className={styles.contact}>
                            <i className="fa-solid fa-phone"/><span className={styles.contacttext}>+959 123 456 789</span>
                        </p>
                        <p className={styles.contact}>
                            <i className="fa-solid fa-phone"/><span className={styles.contacttext}>+959 123 456 789</span>
                        </p>
                        <p className={styles.contact}>
                            <i className="fa-brands fa-viber"/><span className={styles.contacttext}>+959 123 456 789</span>
                        </p>
                    </div>
                    <div className={styles.textcontainer}>
                        <p className={styles.contact}>
                            <i className="fa-solid fa-envelope"/><span className={styles.contacttext}>secondtaproot@gmail.com</span>
                        </p>
                        <p className={styles.contact}>
                            <i className="fa-brands fa-telegram"/><span className={styles.contacttext}>+959 123 456 789</span>
                        </p>
                        <p className={styles.contact}>
                            <i className="fa-brands fa-facebook"/><span className={styles.contacttext}>@Second Tap Root</span>
                        </p>
                    </div>
                    
                </div>
            </div>
            
        </div>
     );
}
 
export default Contact;