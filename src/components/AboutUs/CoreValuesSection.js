import styles from "./CoreValuesSection.module.css";
import CoreValue from "../Common/CoreValue";

const CoreValuesSection = ({corevalues}) => {
    
    let  firstcorevalue = null;
    let  secondcorevalue = null;
    let  thirdcorevalue = null;
    let  fourthcorevalue = null;

    return ( 
        <div className={styles.container}>
            <div className={styles.title}>Core Value(အဓိကတန်ဖိုးထားမှုများ)</div>
            <div className={styles.textcontainer}>
                <span>
                    <center> ဒုတိယရေသောက်မြစ် လူမှုကူညီရေးအဖွဲ့၏ အဓိကတန်ဖိုးထားမှုများမှာ အဖွဲ့အစည်း၏ ကြိုးပမ်းမှုအ၀၀ကို  လမ်းညွှန်သည့် အခြေခံအချက်အလက်များပင်ဖြစ်ပါသည်။</center>
                </span>
                
                {corevalues.map((corevalue, index) => {
                   if(index === 0){
                        firstcorevalue = corevalue;
                    }
                    else if(index === 1){
                        secondcorevalue = corevalue;
                    }
                    else if(index === 2){
                        thirdcorevalue = corevalue;
                    }
                    else{
                        fourthcorevalue = corevalue;
                    }
                }
                )
                }
                <div className={styles.subcontainer}>
                    <CoreValue corevalue={firstcorevalue}/>
                    <CoreValue corevalue={secondcorevalue}/>
                </div>
                <div className={styles.subcontainer}>
                    <CoreValue corevalue={thirdcorevalue}/>
                    <CoreValue corevalue={fourthcorevalue}/>
                </div>
            </div>
          
        </div>
     );
}
 
export default CoreValuesSection;