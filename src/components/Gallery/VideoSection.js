import styles from './VideoSection.module.css';
import { Player } from 'video-react'; 

const VideoSection = ({videos}) => {
    return ( 
        <div className={styles.cardcontainer}>
        {videos.map((video,index) => (
        <div className={styles.card} key={index}>
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