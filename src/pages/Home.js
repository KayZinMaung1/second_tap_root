import React, { Fragment } from 'react'
import Cover from '../components/Home/Cover'
import FeaturedBlogs from '../components/Home/FeaturedBlogs';
import Motto from '../components/Home/Motto';

const Home = () => {
    return (
        <Fragment>
            <Cover />
            <Motto/>
            <FeaturedBlogs/>
        </Fragment >
     );
}

export default Home;