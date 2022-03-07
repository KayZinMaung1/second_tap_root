import { Fragment } from "react";
import blogimage1 from '../../images/blogimage1.jpg';
import LeftBlog from "../Common/LeftBlog";
import RightBlog from "../Common/RightBlog";

function FeaturedBlogs() {
    return (
        <Fragment>
                <LeftBlog 
                    title ='ကလေးများဘ၀ပြည့်စုံရေး  လက်တွဲရင်းနှီးမြှပ်နှံပေး'
                    postingdate = '22/02/2022'
                    description = 'နိုဝင်ဘာလမှာ ​မွေး​နေ့ကျ​ရောက်တဲ့က​လေးငယ်များအတွက် ကိတ်မုန့်အခမဲ့ရယူပါ။ "ယခုလာမည့် Nov 20 ရက်​နေ့ဟာ ၃၂ကြိမ်​မြောက် က​လေးသူငယ်အခွင့်အ​ရေးများဆိုင်ရာ ကုလသမဂ္ဂညီလာခံ သ​​ဘောတူစာချုပ်အထိမ်းအမှတ်နေ့နှင့် အပြည်ပြည်ဆိုင်ရာ က​လေးသူငယ်များ​နေ့" ဖြစ်ပါတယ်။က​လေးသူငယ်များဟာ Covid 19 စတင်ဖြစ်ပွားချိန်ကစလို့၊လက်တ​လောဖြစ်​ပေါ်​နေ​သော အ​ခြေအ​နေများ​ကြောင့်'
                    image = {blogimage1}
                    marginTop='1px'
                />
                <RightBlog
                    title ='ကလေးများဘ၀ပြည့်စုံရေး  လက်တွဲရင်းနှီးမြှပ်နှံပေး'
                    postingdate = '22/02/2022'
                    description = 'နိုဝင်ဘာလမှာ ​မွေး​နေ့ကျ​ရောက်တဲ့က​လေးငယ်များအတွက် ကိတ်မုန့်အခမဲ့ရယူပါ။ "ယခုလာမည့် Nov 20 ရက်​နေ့ဟာ ၃၂ကြိမ်​မြောက် က​လေးသူငယ်အခွင့်အ​ရေးများဆိုင်ရာ ကုလသမဂ္ဂညီလာခံ သ​​ဘောတူစာချုပ်အထိမ်းအမှတ်နေ့နှင့် အပြည်ပြည်ဆိုင်ရာ က​လေးသူငယ်များ​နေ့" ဖြစ်ပါတယ်။က​လေးသူငယ်များဟာ Covid 19 စတင်ဖြစ်ပွားချိန်ကစလို့၊လက်တ​လောဖြစ်​ပေါ်​နေ​သော အ​ခြေအ​နေများ​ကြောင့်'
                    image = {blogimage1}
                    marginTop="0px"
                />
        </Fragment>
    );
}

export default FeaturedBlogs;
