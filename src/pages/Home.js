import React, { Fragment } from 'react'
import Cover from '../components/Home/Cover'
import FeaturedBlogs from '../components/Home/FeaturedBlogs';
import Motto from '../components/Home/Motto';
import FeaturedGallery from '../components/Home/FeaturedGallery';
import VissionMissionGoal from '../components/Home/VissionMissionGoal';

const Home = () => {
    return (
        <Fragment>
            <Cover />
            <Motto/>
            <FeaturedBlogs/>
            <FeaturedGallery/>
            <VissionMissionGoal/>
        </Fragment >
     );
}
export default Home;