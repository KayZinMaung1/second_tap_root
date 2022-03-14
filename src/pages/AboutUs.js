import React, { Fragment } from 'react';
import CoreValuesSection from '../components/AboutUs/CoreValuesSection';
import Intro from '../components/AboutUs/Intro';
import Policy from '../components/AboutUs/Policy';
import Process from '../components/AboutUs/Process';
import VMGBlogs from '../components/AboutUs/VMGBlogs';
import { getCoreValues} from "../data/data";
import { useParams } from "react-router-dom";

const AboutUs = () => {
    const corevalues = getCoreValues();
    const {content} = useParams();
    
    const scrollToVision = () => {
        window.scrollTo({
          top: 290,
          behavior: "smooth",
        });
      };
      const scrollToMission = () => {
        window.scrollTo({
          top: 610,
          behavior: "smooth",
        });
      };
      const scrollToGoal = () => {
        window.scrollTo({
          top: 940,
          behavior: "smooth",
        });
      };
      const scrollToTop = ( ) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      
    if(content === 'vision'){
      scrollToVision();
    }
    else if(content === 'mission'){
      scrollToMission();
    }
    else if(content === 'goal'){
      scrollToGoal();
    }
    else{
      scrollToTop();
    }

    return ( 
        <Fragment>
            <Intro/>
            <VMGBlogs />
            <CoreValuesSection corevalues={corevalues} />
            <Process/>
            <Policy/>
        </Fragment >
     );
}
 
export default AboutUs;