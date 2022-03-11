import { useRef, useState, useEffect } from "react";
import styles from "./FeaturedVideo.module.css";
import Carousel from "react-elastic-carousel";
import { Player } from 'video-react'; 


function FeaturedVideo({featuredvideos}) {

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
      <div className={styles.title}>VIDEOS</div>
      <Carousel
        breakPoints={breakPoints}
        ref={carouselRef}
      >
        {featuredvideos.map((video, index) => (
             <video controls className={styles.video}  key={index} poster={video.poster}>
                <source src={video.video} type="video/mp4"/>
             </video>
        ))}
      </Carousel>
    </div>
  ); 
}

export default FeaturedVideo;
