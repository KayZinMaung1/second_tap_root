import styles from './LeftBlog.module.css';

const LeftBlog = ({ title, postingdate, description, image, marginTop }) => {

    return ( 
       
            <div className={styles.container} style={{ marginTop: marginTop }}>
                <div className={styles.textcontainer}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.postingdate}>{postingdate}</p>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.seemore}>
                        ဆက်လက်ဖတ်ရှုရန်
                    </div>
                </div>
                <div>
                    <img src={image} alt="blog image" className={styles.img} />
                </div>
            </div>
       
     );
}
 
export default LeftBlog;