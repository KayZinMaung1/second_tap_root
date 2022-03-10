import styles from './LeftBlog.module.css';
import { Link } from "react-router-dom";

const LeftBlog = ({ blog, marginTop }) => {

    return ( 
       
            <div className={styles.container} style={{ marginTop: marginTop }} key={blog.id}>
                <div className={styles.textcontainer}>
                    <p className={styles.title}>{blog.title}</p>
                    <p className={styles.postingdate}>{blog.postingdate}</p>
                    <p className={styles.description}>{blog.description}</p>
                    <Link to={`/blogs/${blog.id}`} style={{textDecoration: 0}}>
                        <div className={styles.seemore}>
                            ဆက်လက်ဖတ်ရှုရန်
                        </div>
                    </Link>
                </div>
                <div>
                    <img src={blog.image} alt={blog.title} className={styles.img} />
                </div>
            </div>
       
     );
}
 
export default LeftBlog;