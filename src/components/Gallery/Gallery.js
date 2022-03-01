import styles from './Gallery.module.css';

const Gallery = ({ galleries }) => {
console.log("Galleries :" ,{galleries});
    return ( 
    <div className={styles.container}>
      <h2>အမှတ်တရဓာတ်ပုံများ</h2>
      <div className={styles.cardcontainer}>
        {galleries.map((gallery) => (
          <div className={styles.card} >
            <img src={gallery} alt="Gallery" width={500} height={330} />
            <div className={styles.textcontainer}>bla bla</div>
          </div>
        ))}
      </div>
    </div>
     );
}
 
export default Gallery;