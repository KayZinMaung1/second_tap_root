import Blogs from "../components/Blogs/Blogs";
import { getAllBlogs } from "../data/data";

const BlogsPage = () => {
    const blogs = getAllBlogs();
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    scrollToTop();
    return ( 
        <Blogs blogs={blogs}/>
     );
}
 
export default BlogsPage;