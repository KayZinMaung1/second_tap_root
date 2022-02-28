import React, { Fragment } from 'react'
import Cover from '../components/Home/Cover'
import FeaturedBlogs from '../components/Home/FeaturedBlogs';
import Motto from '../components/Home/Motto';
import FeaturedGallery from '../components/Home/FeaturedGallery';
import VissionMissionGoal from '../components/Home/VissionMissionGoal';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <Fragment>
            <Cover />
            <Motto/>
            <FeaturedBlogs/>
            <FeaturedGallery/>
            <VissionMissionGoal/>
            <Footer/>
        </Fragment >
     );
}
export default Home;