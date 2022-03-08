import React, { Fragment } from 'react'
import Cover from '../components/Home/Cover'
import FeaturedBlogs from '../components/Home/FeaturedBlogs';
import Motto from '../components/Home/Motto';
import FeaturedGallery from '../components/Home/FeaturedGallery';
import VisionMissionGoal from '../components/Home/VisionMissionGoal';
import FeaturedVideo from '../components/Home/FeaturedVideo';

import featuredphoto1 from '../images/featuredphoto1.jpg';
import featuredphoto2 from '../images/featuredphoto2.jpg';
import featuredphoto3 from '../images/featuredphoto3.jpg';

const Home = () => {
    const video1 ='https://media.w3.org/2010/05/sintel/trailer_hd.mp4';
    const videos = [video1,video1,video1,video1,video1,video1];

    const galleries = [featuredphoto1,featuredphoto2,featuredphoto3,featuredphoto1,featuredphoto2,featuredphoto3];
    return (
        <Fragment>
            <Cover />
            <Motto/>
            <FeaturedBlogs/>
            <FeaturedGallery galleries={galleries}/>
            <FeaturedVideo  videos={videos}/>
            <VisionMissionGoal/>
        </Fragment >
     );
}
export default Home;