import styles from './Cover.module.css';
import coverphoto from '../../images/coverphoto.jpg';
import logo from '../../images/logo.jpg';

const Cover = () => {
  return (
    <div className={styles.container}>
      <img src={coverphoto} alt="coverphoto" className={styles.coverphoto} />
      <div className={styles.subcontainer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <p className={styles.covertext}> ဒုတိယရေသောက်မြစ်</p>
        <p className={styles.subcovertext}>လူမှုကူညီရေးအဖွဲ့(မန္တလေး) </p>
      </div>
    </div>
  );
}

export default Cover;