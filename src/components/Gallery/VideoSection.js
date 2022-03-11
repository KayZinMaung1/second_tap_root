import styles from './VideoSection.module.css';
import { Player } from 'video-react'; 

const VideoSection = ({videos}) => {
    return ( 
        <div className={styles.cardcontainer}>
        {videos.map((video,index) => (
        <div className={styles.card} key={index}>
          <div className={styles.video}> 
            <video controls className={styles.video}  key={index} poster={video.poster}>
                <source src={video.video} type="video/mp4"/>
            </video>
          </div>
          <div className={styles.textcontainer}>{video.description}</div>
        </div>
      ))}
    </div>
     );
}

export default VideoSection;