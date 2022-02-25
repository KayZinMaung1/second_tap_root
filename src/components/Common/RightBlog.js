import styles from './RightBlog.module.css';

const RightBlog = ({ title, postingdate, description, image, marginTop }) => {
    return (
        <div className={styles.container} style={{ marginTop: marginTop }}>
            <div>
                {<img src={image} alt="blog image" className={styles.img} />}
            </div>
            <div className={styles.textcontainer}>
                <p className={styles.title}>{title}</p>
                <p className={styles.postingdate}>{postingdate}</p>
                <p className={styles.description}>{description}</p>
                <div className={styles.seemore}>
                    ဆက်လက်ဖတ်ရှုရန်
                </div>
            </div>
        </div>

    );
}

export default RightBlog;