import styles from './RelatedPosts.module.css';
import featuredphoto1 from '../../images/featuredphoto1.jpg';

const RelatedPosts = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.title}>Related Posts</div>
            <div className={styles.subcontainer}>
                <div className={styles.blogcontainer}>
                    <img
                        src={featuredphoto1}
                        alt="core value"
                        className={styles.img}
                    />
                    <p className={styles.subtitle}>ကလေးများဘ၀ပြည့်စုံရေး  လက်တွဲရင်းနှီးမြှပ်နှံပေး</p>
                    <p className={styles.postingdate}>22/02/2022</p>
                </div>
                <div className={styles.blogcontainer}>
                    <img
                        src={featuredphoto1}
                        alt="core value"
                        className={styles.img}
                    />
                    <p className={styles.subtitle}>ကလေးများဘ၀ပြည့်စုံရေး  လက်တွဲရင်းနှီးမြှပ်နှံပေး</p>
                    <p className={styles.postingdate}>22/02/2022</p>
                </div>
                <div className={styles.blogcontainer}>
                    <img
                        src={featuredphoto1}
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