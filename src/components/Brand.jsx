import React from "react";

//CSS
import styles from "./styles/Brand.module.css";

//Logo
import Canon from "../assets/canon_logo.png";
import Bosch from "../assets/bosch_logo.png";

const Brand = () => {
  return (
    <div className={styles.container}>
      <header>
        {" "}
        <h3>Looking for a particular brand ... ?</h3>{" "}
      </header>
      <section className={styles.section}>
        <div className={`${styles.col} ${styles.canon}`}>
          <img src={Canon} alt="brand_logo" />
          <img src={Canon} alt="brand_logo" />
          <img src={Canon} alt="brand_logo" />
        </div>
        <div className={styles.col}>
          <img src={Bosch} alt="brand_logo" />
          <img src={Bosch} alt="brand_logo" />
          <img src={Bosch} alt="brand_logo" />
        </div>
        <div className={`${styles.col} ${styles.canon}`}>
          <img src={Canon} alt="brand_logo" />
          <img src={Canon} alt="brand_logo" />
          <img src={Canon} alt="brand_logo" />
        </div>
        <div className={styles.col}>
          <img src={Bosch} alt="brand_logo" />
          <img src={Bosch} alt="brand_logo" />
          <img src={Bosch} alt="brand_logo" />
        </div>
        <div className={`${styles.col} ${styles.canon}`}>
          <img src={Canon} alt="brand_logo" />
          <img src={Canon} alt="brand_logo" />
          <img src={Canon} alt="brand_logo" />
        </div>
        <div className={styles.col}>
          <img src={Bosch} alt="brand_logo" />
          <img src={Bosch} alt="brand_logo" />
          <img src={Bosch} alt="brand_logo" />
        </div>
      </section>
    </div>
  );
};

export default Brand;
