import RelatedPosts from "../components/BlogDetails/RelatedPosts";
import Blog from "../components/BlogDetails/Blog";
import React, { Fragment } from 'react';
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    return ( 
        <Fragment>
            <Blog id={id}/>
            <RelatedPosts/>
        </Fragment >
     );
}
 
export default BlogDetails;