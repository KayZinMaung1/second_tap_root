import styles from "./Intro.module.css";
import blogimage1 from '../../images/blogimage1.jpg';

function Intro() {
    return (
            <div className={styles.container}>

                <div className={styles.textcontainer}>
                    <p className={styles.title}>About Us</p>
                    <p className={styles.description}>
                      <span>
                        The about us page is commonly used by all types of businesses to give customers more insight into who is involved with a given business and exactly what it does.
                        The about us page is often a reflection of the purpose and personality of the business and its owners or top employees.
                      </span>
                    </p>
                    
                </div>

                <div>
                    {<img src={blogimage1} alt="blog image" className={styles.img} />}
                </div>

               

            </div>
       
    );
}

export default Intro;
