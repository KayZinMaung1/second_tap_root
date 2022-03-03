import styles from './Gallery.module.css';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import PhotoSection from './PhotoSection';
import VideoSection from './VideoSection';

const Gallery = ({galleries,videos}) => {
console.log("Galleries :" ,{galleries});

const [isDocumentaryPhoto,setIsDocumentaryPhoto]=useState(true);


    return ( 
    <div className={styles.container}>
      <div className={styles.subcontainer}> 
          <NavLink to="" style={(state) => setIsDocumentaryPhoto(state.isActive)}>
          <h2>အမှတ်တရဓာတ်ပုံများ</h2>         
          </NavLink>
          <NavLink to="">
          <h2>ဗွီဒီယိုများ</h2>         
          </NavLink>
      </div>
      {{isDocumentaryPhoto} ? (
        <PhotoSection galleries={galleries}/>
      ) : (
        <VideoSection  videos={videos}/>
        
      )
}
    </div>
     );
}
 
export default Gallery;