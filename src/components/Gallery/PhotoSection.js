import styles from './PhotoSection.module.css';
const PhotoSection = ({galleries}) => {
  console.log("PHoto section")
    return ( 
        <div className={styles.cardcontainer}>
        {galleries.map((gallery) => (
          <div className={styles.card} >
            <img src={gallery} alt="Gallery" className={styles.photo} />
            <div className={styles.textcontainer}>bla bla</div>
          </div>
        ))}
      </div>
     );
}
 
export default PhotoSection;