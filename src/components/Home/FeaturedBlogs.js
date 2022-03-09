import { Fragment } from "react";
import LeftBlog from "../Common/LeftBlog";
import RightBlog from "../Common/RightBlog";


function FeaturedBlogs({featuredblogs}) {
    return (
        <Fragment>
               {featuredblogs.map((blog, index) => {
                   if(index % 2 === 0) {
                        return <LeftBlog blog={blog} key={index} marginTop="1px" />;
                   }else{
                        return <RightBlog blog={blog} key={index} marginTop="0px" />;
                   }
               })}
        </Fragment>
    );
        
}

export default FeaturedBlogs;
