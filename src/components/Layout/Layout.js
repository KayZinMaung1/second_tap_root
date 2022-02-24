import { Fragment } from "react";
import styles from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";

function Layout(props) {
  return (
    <Fragment>
      {/* <Head>
        <title>Kakehashi</title>
        <link rel="icon" type="image/jpg" href="/images/kakehashi_logo.jpg" />
        <meta
          name="description"
          content="Kakehashi Education Center Official Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}
      <div className={styles.container}>
        <Navbar />
        {props.children}
        {/* <Footer /> */}
      </div>
    </Fragment>
  );
}

export default Layout;
