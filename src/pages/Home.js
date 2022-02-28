import React, { Fragment } from 'react'
import Cover from '../components/Home/Cover'
import FeaturedBlogs from '../components/Home/FeaturedBlogs';
import Motto from '../components/Home/Motto';
import FeaturedGallery from '../components/Home/FeaturedGallery';
import VisionMissionGoal from '../components/Home/VisionMissionGoal';

const Home = () => {
    return (
        <Fragment>
            <Cover />
            <Motto/>
            <FeaturedBlogs/>
            <FeaturedGallery/>
            <VisionMissionGoal/>
        </Fragment >
     );
}
export default Home;