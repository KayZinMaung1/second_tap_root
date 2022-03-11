import styles from './Cover.module.css';

const Cover = () => {
    return ( 
        <div className={styles.container}>
            <img src='/images/contactbanner.jpg' alt="coverphoto" className={styles.coverphoto} />
            <p className={styles.covertext}> Contact Us </p>
        </div>
     );
}
 
export default Cover;