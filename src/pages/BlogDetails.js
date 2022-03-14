import RelatedPosts from "../components/BlogDetails/RelatedPosts";
import Blog from "../components/BlogDetails/Blog";
import React, { Fragment } from 'react';
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    scrollToTop();
    return ( 
        <Fragment>
            <Blog id={id}/>
            <RelatedPosts/>
        </Fragment >
     );
}
 
export default BlogDetails;