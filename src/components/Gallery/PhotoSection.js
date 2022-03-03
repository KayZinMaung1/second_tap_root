import styles from './PhotoSection.module.css';
const PhotoSection = ({galleries}) => {
  console.log("PHoto section")
    return ( 
        <div className={styles.cardcontainer}>
        {galleries.map((gallery) => (
          <div className={styles.card} >
            <img src={gallery} alt="Gallery" width={500} height={330} />
            <div className={styles.textcontainer}>bla bla</div>
          </div>
        ))}
      </div>
     );
}
 
export default PhotoSection;