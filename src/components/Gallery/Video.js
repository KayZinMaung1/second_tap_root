import styles from './Video.module.css';
import { Player } from 'video-react'; 
import "video-react/dist/video-react.css"; 

const Video = ({videos}) => {
    console.log("videos are",videos)
    return ( 
    <div className={styles.container}>
        <h2>ဗွီဒီယိုများ</h2>
        <div className={styles.cardcontainer}>
          {videos.map((video) => (
          <div className={styles.card} >
            <Player
            playsInline
            poster="/assets/poster.png"
            src={video}
            />
            <div className={styles.textcontainer}>bla bla</div>
          </div>
        ))}
      </div>
        
    </div>
     );
}
 
export default Video;