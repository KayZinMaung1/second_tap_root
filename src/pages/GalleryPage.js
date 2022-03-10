import { Fragment } from "react";
import GalleryMain from "../components/Gallery/GalleryMain";
import { getAllGalleries, getAllVideos } from "../data/data";

const GalleryPage = () => {
  const galleries = getAllGalleries();
  const videos = getAllVideos();
    return ( 
      <Fragment>
        <GalleryMain galleries={galleries} videos={videos}/>
      </Fragment>
     );
}
export default GalleryPage;