import { Fragment } from "react";
import GalleryMain from "../components/Gallery/GalleryMain";
import featuredphoto1 from '../images/featuredphoto1.jpg';
import featuredphoto2 from '../images/featuredphoto2.jpg';
import featuredphoto3 from '../images/featuredphoto3.jpg';


const GalleryPage = () => {
const video1 ='https://media.w3.org/2010/05/sintel/trailer_hd.mp4';

const galleries = [featuredphoto1,featuredphoto2,featuredphoto3,featuredphoto1,featuredphoto2,featuredphoto3];
const videos = [video1,video1,video1,video1,video1,video1,video1,video1];

    return ( 
      <Fragment>
        <GalleryMain galleries={galleries} videos={videos}/>
      </Fragment>
     );
}
export default GalleryPage;