import styles from './VideoSection.module.css';
import { Player } from 'video-react'; 

const VideoSection = ({videos}) => {
    return ( 
        <div className={styles.cardcontainer}>
        {videos.map((video) => (
        <div className={styles.card} >
          <div className={styles.video}> 
            <Player
            playsInline
            poster={video.poster}
            src={video.video}
            />
          </div>
          <div className={styles.textcontainer}>{video.description}</div>
        </div>
      ))}
    </div>
     );
}

export default VideoSection;