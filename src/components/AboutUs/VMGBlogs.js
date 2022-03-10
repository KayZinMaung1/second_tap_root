import ListBlog from "../Common/ListBlog";
import visionimage from '../../images/visionimage.jpg';
import missionimage from '../../images/missionimage.jpg';
import goalimage from '../../images/goalimage.jpg';


const VMGBlogs = () => {
    const vision = ['အေးချမ်းသာယာသောလူ့ဘောင်အဖွဲ့အစည်းတစ်ရပ် ပေါ်ပေါက်လာစေရန်။'];
    const mission = ['လူသားများအားလုံး ဘဝတစ်လျှောက်လုံးတွင် တူညီသော အခွင့်အရေး အပြည့်အဝရစေရန် ဖန်တီးပေးမည်။','အသေးစားနှင့် အလတ်စားစီးပွားရေးလုပ်ငန်းများ အရည်အသွေးပြည်မှီစွာဖြင့် များပြားလာစေရန် ဖန်တီးပေးမည်။',' တရားဥပဒေစိုးမိုးမှုမြှင့်တင်ရေးလုပ်ငန်းများဆောင်ရွက်မည်။ Third Sector Organization(TSO) အဖြစ် ရပ်တည်လာနိုင်စေရန်ဆောင်ရွက်မည်။'];
    const goal = ['မြန်မာနိုင်ငံအတွင်း သဘာဝပတ်ဝန်းကျင်သာယာလှပစေရန်နှင့် ပြည်သူများတူညီသောအခွင့် အရေးရရှိစေရန်၊ လူနေမှုအဆင့်အတန်းမြင့်မားလာစေရန်။'];

    return ( 
        <div>
           <ListBlog 
                title="Vision(ရည်မှန်းချက်)"
                image={visionimage}
                data={vision}
                margintop='1px'
               
            />
            <ListBlog 
                title="Mission(မျှော်မှန်းချက်)"
                image={missionimage}
                data={mission}
                margintop='0px'
                
            />
            <ListBlog 
                title="Goal(ပန်းတိုင်)"
                image={goalimage}
                data={goal}
                margintop='0px'
                
            />
        </div>
     );
}
 
export default VMGBlogs;