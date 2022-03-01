import React, { Fragment } from 'react';
import CoreValuesSection from '../components/AboutUs/CoreValuesSection';
import Intro from '../components/AboutUs/Intro';
import VMGBlogs from '../components/AboutUs/VMGBlogs';

const AboutUs = () => {
    return ( 
        <Fragment>
            <Intro/>
            <VMGBlogs/>
            <CoreValuesSection/>
        </Fragment >
     );
}
 
export default AboutUs;