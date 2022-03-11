import styles from './Cover.module.css';

const Cover = () => {
  return (
    <div className={styles.container}>
      <img src="/images/coverphoto.jpg" alt="coverphoto" className={styles.coverphoto} />
      <div className={styles.subcontainer}>
        <img src="/images/logo.jpg" alt="logo" className={styles.logo} />
        <p className={styles.covertext}> ဒုတိယရေသောက်မြစ်</p>
        <p className={styles.subcovertext}>လူမှုကူညီရေးအဖွဲ့(မန္တလေး) </p>
      </div>
    </div>
  );
}

export default Cover;