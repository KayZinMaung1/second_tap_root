import { useRef, useState, useEffect } from "react";
import styles from "./FeaturedGallery.module.css";
import Carousel from "react-elastic-carousel";
import featuredphoto1 from '../../images/featuredphoto1.jpg';
import featuredphoto2 from '../../images/featuredphoto2.jpg';
import featuredphoto3 from '../../images/featuredphoto3.jpg';

function FeaturedGallery() {
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
        enableAutoPlay
        autoPlaySpeed={1500} // same time
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout);
          if (index + 1 === totalPages) {
            resetTimeout = setTimeout(() => {
              carouselRef?.current?.goTo(0);
            }, 1500); // same time
          }
        }}
      >
        
          <img src={featuredphoto1} alt="featuredphoto" className={styles.photo}/>
       
       
          <img src={featuredphoto2} alt="featuredphoto" className={styles.photo}/>
        
        
          <img src={featuredphoto3} alt="featuredphoto" className={styles.photo}/>
       
       
          <img src={featuredphoto1} alt="featuredphoto" className={styles.photo}/>
       
      
          <img src={featuredphoto2} alt="featuredphoto" className={styles.photo}/>
       
        
          <img src={featuredphoto3} alt="featuredphoto" className={styles.photo}/>
        
      </Carousel>
    </div>
  ); 
}

export default FeaturedGallery;
