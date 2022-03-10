import styles from './Blog.module.css';
import { getBlog } from '../../data/data';

const Blog= ({ id }) => {
    const blog = getBlog(id);
    return ( 
        <div className={styles.container}>
           <img src={blog.image} alt={blog.title} className={styles.img} />
           <div className={styles.textcontainer}>
                <p className={styles.title}>{blog.title}</p>
                <p className={styles.postingdate}>{blog.postingdate}</p>
                <p className={styles.description}>{blog.description}</p>
            </div>
        </div>
     );
}
 
export default Blog;