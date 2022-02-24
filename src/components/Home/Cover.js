import styles from './Cover.module.css';
const Cover = () => {
    return ( 
    <div className={styles.container}>
      {<img src={process.env.PUBLIC_URL + 'images/cover_photo.jpg'} alt="cover_photo" className={styles.cover_photo}/>}
      {<img src={process.env.PUBLIC_URL + 'images/logo.jpg'} alt="logo" className={styles.logo}/>}
      <p className={styles.cover_text}> ဒုတိယရေသောက်မြစ် <br></br>လူမှုကူညီရေးအဖွဲ့(မန္တလေး) </p> 
       <div className={styles.motto}>
       “ လဲသူကိုဖေးမကူညီ  ငိုနေတဲ့မျက်ရည်တွေကို  <br></br>
      ကျွန်တော်တို့ရဲ့လက်တွေနဲ့  ကူညီလို့သုတ်ပေးကြပါစို့ ”
       </div>
    </div>
     );
}
 
export default Cover;