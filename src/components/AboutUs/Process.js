import styles from "./Process.module.css";

const Process = () => {
    return ( 
        <div className={styles.container}>
               <div className={styles.title}>လုပ်ငန်းစဉ်</div>
               <div className={styles.textcontainer}>
                   <ul>
                       <li>လူ့အခွင့်အရေး ကာကွယ်စောင့်ရှောက်ခြင်း။</li>
                       <li>အသေးစားနှင့် အလတ်စားစီးပွားရေးဖွံ့ဖြိုးတိုးတက်စေရန် ကူညီပေးခြင်း။</li>
                       <li>တရားဥပဒေစိုးမိုးရေးလုပ်ငန်းများ။ </li>
                       <li>Third Sector Organization(TSO) အဖြစ် ရပ်တည်လာနိုင်စေခြင်း။</li> 
                   </ul>
               </div>
        </div>
     );
}
 
export default Process;