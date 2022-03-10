import styles from './PhotoSection.module.css';
const PhotoSection = ({galleries}) => {

    return ( 
        <div className={styles.cardcontainer}>
        {galleries.map((gallery,index) => (
          <div className={styles.card} key={index}>
            <img src={gallery.image} alt={gallery.description} className={styles.photo} />
            <div className={styles.textcontainer}>{gallery.description}</div>
          </div>
        ))}
      </div>
     );
}
 
export default PhotoSection;