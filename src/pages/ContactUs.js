import Contact from "../components/ContactUs/Contact";
import Cover from "../components/ContactUs/Cover";
import React, { Fragment } from 'react'


const ContactUs = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    scrollToTop();
    return ( 
        <Fragment>
            <Cover/>
            <Contact/>
        </Fragment>
     );
}
 
export default ContactUs;