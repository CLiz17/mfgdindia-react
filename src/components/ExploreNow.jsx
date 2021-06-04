import React from "react";

//CSS
import styles from "./styles/ExploreNow.module.css";

//Image
import SideImage from "../assets/explore_now_image.svg";

const ExploreNow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={SideImage} alt="image" />
      </div>
      <div className={styles.head}>
        <h3>
          <span>covid-19</span> Prevention &
        </h3>
        <h3>Health Care Supplies</h3>
        <p>Masks, sanitizers, hospital disagonistics & more ...</p>
      </div>
      <button>Explore now</button>
    </div>
  );
};

export default ExploreNow;
