import styles from "./CoreValue.module.css";
const CoreValue = ({icon,title,description}) => {
    return ( 
        <div className={styles.corevaluecontainer}>
                    <img
                        src={icon}
                        alt="core value"
                        className={styles.corevalueicon}
                    />
                    <div className={styles.corevaluetitle}>{title}</div>
                    <div className={styles.description}>
                        <span>
                            {description}
                        </span>
                    </div>
                </div>
     );
}
 
export default CoreValue;