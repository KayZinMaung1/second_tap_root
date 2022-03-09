import { useRef, useState, useEffect } from "react";
import styles from "./FeaturedGallery.module.css";
import Carousel from "react-elastic-carousel";

function FeaturedGallery({featuredgalleries}) {
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
        
        {featuredgalleries.map((gallery, index) => (
          <img key={index} src={gallery.image} alt={gallery.description} className={styles.photo}/>  
        ))}

      </Carousel>
    </div>
  ); 
}

export default FeaturedGallery;
