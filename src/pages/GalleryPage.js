import Gallery from "../components/Gallery/Gallery";
import blogimage1 from '../images/blogimage1.jpg';

const GalleryPage = () => {
const galleries = [blogimage1,blogimage1,blogimage1,blogimage1];

    return ( 
      <Gallery galleries={galleries}/>
     );
}
export default GalleryPage;