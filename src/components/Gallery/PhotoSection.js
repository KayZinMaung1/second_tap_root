import styles from './PhotoSection.module.css';
const PhotoSection = ({galleries}) => {
  console.log("PHoto section")
    return ( 
        <div className={styles.cardcontainer}>
        {galleries.map((gallery) => (
          <div className={styles.card} >
            <img src={gallery.image} alt={gallery.description} className={styles.photo} />
            <div className={styles.textcontainer}>{gallery.description}</div>
          </div>
        ))}
      </div>
     );
}
 
export default PhotoSection;