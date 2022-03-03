import React, { Fragment } from 'react'
import Cover from '../components/Home/Cover'
import FeaturedBlogs from '../components/Home/FeaturedBlogs';
import Motto from '../components/Home/Motto';
import FeaturedGallery from '../components/Home/FeaturedGallery';
import VisionMissionGoal from '../components/Home/VisionMissionGoal';
import FeaturedVideo from '../components/Home/FeaturedVideo';

const Home = () => {
    return (
        <Fragment>
            <Cover />
            <Motto/>
            <FeaturedBlogs/>
            <FeaturedGallery/>
            <FeaturedVideo/>
            <VisionMissionGoal/>
        </Fragment >
     );
}
export default Home;