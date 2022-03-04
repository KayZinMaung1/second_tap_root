import styles from './GalleryMain.module.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import PhotoSection from './PhotoSection';
import VideoSection from './VideoSection';

const GalleryMain = ({galleries,videos}) => {

const [isDocumentaryPhoto,setIsDocumentaryPhoto]=useState(true);

    return ( 
    <div className={styles.container}>
      <div className={styles.subcontainer}> 
          <Link to="" 
            onClick={(e) => setIsDocumentaryPhoto(true)} 
            className={isDocumentaryPhoto ? [styles.title, styles.active].join(" ") : styles.title}
          >
          <h2>အမှတ်တရဓာတ်ပုံများ</h2>         
          </Link>
          <Link to=""  
            onClick={(e) => setIsDocumentaryPhoto(false)} 
            className={!isDocumentaryPhoto ? [styles.title, styles.active].join(" ") : styles.title}
          >
          <h2>ဗွီဒီယိုများ</h2>         
          </Link>
      </div>
      {isDocumentaryPhoto ? (
        <PhotoSection galleries={galleries}/>
      ) : (
        <VideoSection  videos={videos}/>
      )
      }
    </div>
     );
}
 
export default GalleryMain;