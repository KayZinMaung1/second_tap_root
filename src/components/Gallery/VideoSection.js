import styles from './VideoSection.module.css';
import { Player } from 'video-react'; 
import "video-react/dist/video-react.css"; 

const VideoSection = ({videos}) => {
    return ( 
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
     );
}
 
export default VideoSection;