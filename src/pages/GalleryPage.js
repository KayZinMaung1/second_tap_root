import { Fragment } from "react";
import Gallery from "../components/Gallery/Gallery";
import featuredphoto1 from '../images/featuredphoto1.jpg';
import featuredphoto2 from '../images/featuredphoto2.jpg';
import featuredphoto3 from '../images/featuredphoto3.jpg';


const GalleryPage = () => {
const video1 ='https://media.w3.org/2010/05/sintel/trailer_hd.mp4';

const galleries = [featuredphoto1,featuredphoto2,featuredphoto3,featuredphoto1,featuredphoto2,featuredphoto3];
const videos = [video1,video1,video1,video1,video1,video1,video1,video1];

    return ( 
      <Fragment>
        <Gallery galleries={galleries} videos={videos}/>
        {/* <Video videos={videos}/> */}
      </Fragment>
     );
}
export default GalleryPage;