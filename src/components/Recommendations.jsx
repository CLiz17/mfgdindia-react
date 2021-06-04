import React from "react";

//CSS
import styles from "./styles/Recommendations.module.css";

//Data
import { cardData } from "../utils/RecommendationsDetails";

const Recommendations = () => {
  return (
    <div className={styles.container}>
      {cardData.map((data) => (
        <Card {...data} />
      ))}
    </div>
  );
};

export default Recommendations;

const Card = ({ img, price, title, offer }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="header_image" />
      <div className={styles.cardBody}>
        <h2> {price} </h2>
        <p> {title} </p>
      </div>
      <p>By Lorem Industries</p>
      {offer && <div className={styles.footer}> Get best price</div>}
    </div>
  );
};
