import styles from './LeftBlog.module.css';

const LeftBlog = (props) => {
    const title = props.title;
    const postingdate = props.postingdate;
    const description = props.description;
    const image = props.image;
    return ( 
        <div className="blog">
            <div className={styles.container}>

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
        </div>   
       
     );
}
 
export default LeftBlog;