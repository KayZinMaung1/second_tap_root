import styles from "./VissionMissionGoal.module.css";
import vissionimage from '../../images/vissionimage.jpg';
import missionimage from '../../images/missionimage.jpg';
import goalimage from '../../images/goalimage.jpg';

const VissionMissionGoal = () => {
    return ( 
        <div className={styles.container}>
             <div className={styles.title}>Our Vission , Mission , Goal</div>
             <div className={styles.subtitle}>(ကျွန်ုပ်တို့၏  ရည်မှန်းချက်/ မျှော်မှန်းချက် / ပန်းတိုင်)</div>
             <div className={styles.subcontainer}>
                <div className={styles.imagecontainer}>
                    <img src={vissionimage} alt="vission" className={styles.img} />
                    <div className={styles.text}>Vission</div>
                </div>
                <div className={styles.imagecontainer}>
                    <img src={missionimage} alt="mission" className={styles.img} />
                    <div className={styles.text}>Mission</div>
                </div>
                <div className={styles.imagecontainer}>
                    <img src={goalimage} alt="goal" className={styles.img} />
                    <div className={styles.text}>Goal</div>
                </div>
            </div>
        </div>            
     );
}
 
export default VissionMissionGoal;