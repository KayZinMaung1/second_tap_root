import styles from './RelatedPosts.module.css';
import blogimage1 from '../../images/blogimage1.jpg';

const RelatedPosts = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.title}>Related Posts</div>
            <div className={styles.subcontainer}>
                <div className={styles.blogcontainer}>
                    <img
                        src={blogimage1}
                        alt="core value"
                        className={styles.img}
                    />
                    <p className={styles.subtitle}>ကလေးများဘ၀ပြည့်စုံရေး  လက်တွဲရင်းနှီးမြှပ်နှံပေး</p>
                    <p className={styles.postingdate}>22/02/2022</p>
                </div>
                <div className={styles.blogcontainer}>
                    <img
                        src={blogimage1}
                        alt="core value"
                        className={styles.img}
                    />
                    <p className={styles.subtitle}>ကလေးများဘ၀ပြည့်စုံရေး  လက်တွဲရင်းနှီးမြှပ်နှံပေး</p>
                    <p className={styles.postingdate}>22/02/2022</p>
                </div>
                <div className={styles.blogcontainer}>
                    <img
                        src={blogimage1}
                        alt="core value"
                        className={styles.img}
                    />
                    <p className={styles.subtitle}>ကလေးများဘ၀ပြည့်စုံရေး  လက်တွဲရင်းနှီးမြှပ်နှံပေး</p>
                    <p className={styles.postingdate}>22/02/2022</p>
                </div>
            </div>
        </div>
     );
}
 
export default RelatedPosts;