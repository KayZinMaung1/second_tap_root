import Blogs from "../components/Blogs/Blogs";
import { getAllBlogs } from "../data/data";

const BlogsPage = () => {
    const blogs = getAllBlogs();
    return ( 
        <Blogs blogs={blogs}/>
     );
}
 
export default BlogsPage;