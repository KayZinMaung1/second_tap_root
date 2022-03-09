import styles from './RightBlog.module.css';

const RightBlog = ({ blog, marginTop }) => {
    return (
        <div className={styles.container} style={{ marginTop: marginTop }}>
            <div>
                {<img src={blog.image} alt={blog.title} className={styles.img} />}
            </div>
            <div className={styles.textcontainer}>
                <p className={styles.title}>{blog.title}</p>
                <p className={styles.postingdate}>{blog.postingdate}</p>
                <p className={styles.description}>{blog.description}</p>
                <div className={styles.seemore}>
                    ဆက်လက်ဖတ်ရှုရန်
                </div>
            </div>
        </div>

    );
}

export default RightBlog;