import styles from './Blogs.module.css';
import LeftBlog from "../Common/LeftBlog";
import RightBlog from "../Common/RightBlog";

const Blogs = ({blogs}) => {
    return ( 
        <div className={styles.container}>
            {blogs.map((blog, index) => {
                   if(index % 2 === 0) {
                        return <LeftBlog blog={blog} key={index} marginTop="1px" />;
                   }else{
                        return <RightBlog blog={blog} key={index} marginTop="0px" />;
                   }
               })}
        </div>
        
     );
}
 
export default Blogs;