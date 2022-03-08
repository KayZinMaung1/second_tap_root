import styles from "./CoreValuesSection.module.css";
import CoreValue from "../Common/CoreValue";
import accountabilityicon from '../../images/accountability.png';
import respecticon from '../../images/respect.png';
import entrepreneurialshipicon from '../../images/entrepreneurialship.png';
import collaborationicon from '../../images/collaboration.png'; 

const CoreValuesSection = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.title}>Core Value(အဓိကတန်ဖိုးထားမှုများ)</div>
            <div className={styles.textcontainer}>
                <span>
                    <center> ဒုတိယရေသောက်မြစ် လူမှုကူညီရေးအဖွဲ့၏ အဓိကတန်ဖိုးထားမှုများမှာ အဖွဲ့အစည်း၏ ကြိုးပမ်းမှုအ၀၀ကို  လမ်းညွှန်သည့် အခြေခံအချက်အလက်များပင်ဖြစ်ပါသည်။</center>
                </span>
                
            </div>
            <div className={styles.subcontainer}>
               <CoreValue 
                    icon={accountabilityicon}
                    title='တာဝန်ယူမှု(Accountability)'
                    description='အမြတ်အစွန်းမယူသော လူမှုရေးအဖွဲ့အစည်းတစ်ခုဖြစ်သည့်
                                အလျောက် စေတနာရှင်၊ အလှူရှင် တို့၏ ယုံကြည်စိတ်ချစွာ
                                အပ်နှံထားသော အလှူငွေအရပ်ရပ်ကို အကြီးမြတ်ဆုံး
                                တန်ဖိုးထားကာ စံနမူနာကောင်းဖြစ်အောင် 
                                တာဝန်ယူလုပ်ဆောင်သွားမည်။'
               />
               <CoreValue 
                    icon={respecticon}
                    title='	လေးစားမှု (Respect)'
                    description='ကျွန်ုပ်တို့သည် ထိတွေ့ဆက်ဆံနေရသောသူအားလုံးနှင့်
                                ဆက်ဆံရာတွင် လေးစားမှုသည် အခြေခံမူတစ်ရပ်ဖြစ်သည်။'
               />
            </div>
            <div className={styles.subcontainer}>
               <CoreValue 
                    icon={entrepreneurialshipicon}
                    title='စွန့်ဦးတီထွင်မှု (Entrepreneurial ship)'
                    description='ကျွန်ုပ်တို့သည် တီထွင်ဆန်းသစ်မှုကို တန်ဖိုးထားပြီး အဖွဲ့အစည်း၏
                                ပဋိညာဉ်စာတမ်းပါ ရည်မှန်းချက်များ အစွမ်းကုန်ပြည့်မီစေရန် 
                                တွေ့ကြုံရင်ဆိုင်ရသည့် အခက်အခဲများကို အခွင့်အလမ်းများအဖြစ်
                                ပြောင်းလဲသည်။'
               />
               <CoreValue 
                    icon={collaborationicon}
                    title='ပူးပေါင်းဆောင်ရွက်မှု (Collaboration)'
                    description='ကျွန်ုပ်တို့သည် ပဋိညာဉ်စာတမ်းပါရည်မှန်းချက်များ အောင်မြင်စေရန်
                                အတွက် ရည်မှန်းချက်တူညီ သောအခြားသောအဖွဲ့အစည်းများနှင့် 
                                လက်တွဲပူးပေါင်းဆောင်ရွက်ပြီး အသင်းအဖွဲ့စိတ်ဓါတ်ဖြင့် 
                                ဆက်ဆံရေးနှင့်ပူးပေါင်းပါဝင်ရေးကို အလေးထားအားပေးသည်။'
               />
            </div>
        </div>
     );
}
 
export default CoreValuesSection;