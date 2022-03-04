import styles from './UpBar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt ,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare,faTelegram,faViber} from "@fortawesome/free-brands-svg-icons";

const UpBar = () => {
    return ( 
        <div className={styles.container}>
            
            <div className={styles.subcontainer}>
                <div className={styles.subcontainer}>
                   <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                    <div className={styles.text}>second tap root@gmail.com</div>
                </div>
                <div className={styles.sperator}> | </div>
                <div className={styles.subcontainer}>
                    <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon}/>
                    <div className={styles.text}> 09-123456789</div>
                </div>
            </div>
            <div className={styles.subcontainer}>
                <FontAwesomeIcon icon={faFacebookSquare} className={styles.brandicon}/>
                <FontAwesomeIcon icon={faTelegram} className={styles.brandicon}/>
                <FontAwesomeIcon icon={faViber} className={styles.brandicon}/>     
            </div>
        </div>
     );
}
 
export default UpBar;