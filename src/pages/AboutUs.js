import React, { Fragment } from 'react';
import CoreValuesSection from '../components/AboutUs/CoreValuesSection';
import Intro from '../components/AboutUs/Intro';
import Policy from '../components/AboutUs/Policy';
import Process from '../components/AboutUs/Process';
import VMGBlogs from '../components/AboutUs/VMGBlogs';

const AboutUs = () => {
    return ( 
        <Fragment>
            <Intro/>
            <VMGBlogs/>
            <CoreValuesSection/>
            <Process/>
            <Policy/>
        </Fragment >
     );
}
 
export default AboutUs;