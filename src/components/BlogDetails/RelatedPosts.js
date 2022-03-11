import styles from './RelatedPosts.module.css';
import { getRelatedBlogs } from '../../data/data';
import { Link } from "react-router-dom";

const RelatedPosts = () => {
    const relatedposts = getRelatedBlogs();

    return ( 
        <div className={styles.container}>
            <div className={styles.title}>Related Posts</div>
            <div className={styles.subcontainer}>
                { relatedposts.map((blog,index) => (
               <Link to={`/blogs/${blog.id}`} style={{textDecoration: 0}}>
                    <div className={styles.blogcontainer} key={index}>
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className={styles.img}
                        />
                        <p className={styles.subtitle}>{blog.title}</p>
                        <p className={styles.postingdate}>{blog.postingdate}</p>
                    </div>
                </Link>
            ))}  
            </div>
        </div>
     );
}
 
export default RelatedPosts;