import Blog from "../components/BlogDetails/Blog";
import RelatedPosts from "../components/BlogDetails/RelatedPosts";
import React, { Fragment } from 'react'


const BlogDetails = () => {
    return ( 
        <Fragment>
            <Blog/>
            <RelatedPosts/>
        </Fragment >
     );
}
 
export default BlogDetails;