import React, { Fragment } from 'react';
import CoreValuesSection from '../components/AboutUs/CoreValuesSection';
import Intro from '../components/AboutUs/Intro';
import Policy from '../components/AboutUs/Policy';
import Process from '../components/AboutUs/Process';
import VMGBlogs from '../components/AboutUs/VMGBlogs';
import { getCoreValues} from "../data/data";

const AboutUs = () => {
    const corevalues = getCoreValues();
    return ( 
        <Fragment>
            <Intro/>
            <VMGBlogs/>
            <CoreValuesSection corevalues={corevalues}/>
            <Process/>
            <Policy/>
        </Fragment >
     );
}
 
export default AboutUs;