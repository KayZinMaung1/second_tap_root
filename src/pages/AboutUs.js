import React, { Fragment } from 'react';
import CoreValuesSection from '../components/AboutUs/CoreValuesSection';
import Intro from '../components/AboutUs/Intro';
import Process from '../components/AboutUs/Process';
import VMGBlogs from '../components/AboutUs/VMGBlogs';

const AboutUs = () => {
    return ( 
        <Fragment>
            <Intro/>
            <VMGBlogs/>
            <CoreValuesSection/>
            <Process/>
        </Fragment >
     );
}
 
export default AboutUs;