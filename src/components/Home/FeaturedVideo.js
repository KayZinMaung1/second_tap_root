

import { useRef, useState, useEffect } from "react";
import styles from "./FeaturedVideo.module.css";
import Carousel from "react-elastic-carousel";
import { Player } from 'video-react'; 
import "video-react/dist/video-react.css"; 

import featuredphoto1 from '../../images/featuredphoto1.jpg';
import featuredphoto2 from '../../images/featuredphoto2.jpg';
import featuredphoto3 from '../../images/featuredphoto3.jpg';


function FeaturedVideo() {
  let resetTimeout;
  const carouselRef = useRef(null);

  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    function updateSize() {
      setTotalPages(window.innerWidth >= 1119 ? 5 : 6);
    }
    window.addEventListener("resize", updateSize);

    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const breakPoints = [
    { width: 450, itemsToShow: 1 },
    { width: 950, itemsToShow: 2 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>PHOTOS</div>
      <Carousel
        breakPoints={breakPoints}
        ref={carouselRef}
      >
        <div className={styles.imagecontainer}>
                <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
           { console.log("player")}
        </div>
        <div className={styles.imagecontainer}>
            <img src={featuredphoto2} alt="featuredphoto" className={styles.photo}/>
        </div>
        <div className={styles.imagecontainer}>
          <img src={featuredphoto3} alt="featuredphoto" className={styles.photo}/>
        </div>
        <div className={styles.imagecontainer}>
          <img src={featuredphoto1} alt="featuredphoto" className={styles.photo}/>
        </div>
        <div className={styles.imagecontainer}>
          <img src={featuredphoto2} alt="featuredphoto" className={styles.photo}/>
        </div>
        <div className={styles.imagecontainer}>
          <img src={featuredphoto3} alt="featuredphoto" className={styles.photo}/>
        </div>
      </Carousel>
    </div>
  ); 
}

export default FeaturedVideo;
