import React, { Fragment } from 'react';
import CoreValuesSection from '../components/AboutUs/CoreValuesSection';
import Intro from '../components/AboutUs/Intro';
import Policy from '../components/AboutUs/Policy';
import Process from '../components/AboutUs/Process';
import VMGBlogs from '../components/AboutUs/VMGBlogs';
import { getCoreValues} from "../data/data";
import  { useEffect } from 'react';

const AboutUs = () => {
    const corevalues = getCoreValues();

    return ( 
        <Fragment>
            <Intro/>
            <div id='VMGBlogs'>
                <VMGBlogs />
            </div>
            <CoreValuesSection corevalues={corevalues} />
            <Process/>
            <Policy/>
        </Fragment >
     );
}
 
export default AboutUs;