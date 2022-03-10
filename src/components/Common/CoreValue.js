import styles from "./CoreValue.module.css";
const CoreValue = ({corevalue}) => {
    return ( 
        <div className={styles.corevaluecontainer}>
                    <img
                        src={corevalue.icon}
                        alt="core value"
                        className={styles.corevalueicon}
                    />
                    <div className={styles.corevaluetitle}>{corevalue.title}</div>
                    <div className={styles.description}>
                        <span>
                            {corevalue.description}
                        </span>
                    </div>
                </div>
     );
}
 
export default CoreValue;