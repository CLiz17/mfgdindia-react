import React from "react";

//CSS
import styles from "./styles/Categories.module.css";

//Data
import { CardDetails } from "../utils/CategoriesDetails";

const Categories = () => {
  return (
    <div className={styles.Container}>
      {CardDetails.map((data) => (
        <Card key={data.id} title={data.title} img={data.img} />
      ))}
    </div>
  );
};

export default Categories;

const Card = ({ title, img }) => {
  return (
    <div className={styles.Card}>
      <img src={img} alt="image" />
      <div className={styles.CardBody}>
        <h3>{title}</h3>
        <p>Get Quote </p>
      </div>
    </div>
  );
};
