import styles from './Cover.module.css';
import contactbanner from '../../images/contactbanner.jpg';

const Cover = () => {
    return ( 
        <div className={styles.container}>
            <img src={contactbanner} alt="coverphoto" className={styles.coverphoto} />
            <p className={styles.covertext}> Contact Us </p>
        </div>
     );
}
 
export default Cover;