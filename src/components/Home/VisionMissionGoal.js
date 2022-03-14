import styles from "./VisionMissionGoal.module.css";
import { Link } from "react-router-dom";

const VisionMissionGoal = () => {
    
    return ( 
        <div className={styles.container}>
             <div className={styles.title}>OUR VISION , MISSION , GOAL</div>
             <div className={styles.subtitle}>(ကျွန်ုပ်တို့၏  ရည်မှန်းချက်/ မျှော်မှန်းချက် / ပန်းတိုင်)</div>
             <div className={styles.subcontainer}>
                <div className={styles.imagecontainer}>
                    <img src='/images/visionimage.jpg' alt="vision" className={styles.img} />
                    <Link to='/aboutus/vision' >
                        <div className={styles.text}>Vission</div>
                    </Link>
                </div>
                <div className={styles.imagecontainer}>
                    <img src='/images/missionimage.jpg' alt="mission" className={styles.img} />
                    <Link to='/aboutus/mission' >
                        <div className={styles.text}>Mission</div>
                    </Link>
                </div>
                <div className={styles.imagecontainer}>
                    <img src='/images/goalimage.jpg' alt="goal" className={styles.img} />
                    <Link to='/aboutus/goal' >
                        <div className={styles.text}>Goal</div>
                    </Link>
                </div>
            </div>
           
        </div>            
     );
}
 
export default VisionMissionGoal;