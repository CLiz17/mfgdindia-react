import React from "react";

//Footer CSS
import styles from "./styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <div className={styles.col}>
          <p>CONTENTS</p>
          <p>About Us</p>
          <p>Help Center</p>
          <p>Contact Us</p>
          <p>Report Abuse</p>
          <p>Policies & Rules</p>
        </div>
        <div className={styles.col}>
          <p>CONTENTS</p>
          <p>About Us</p>
          <p>Help Center</p>
          <p>Contact Us</p>
          <p>Report Abuse</p>
          <p>Policies & Rules</p>
        </div>{" "}
        <div className={styles.col}>
          <p>CONTENTS</p>
          <p>About Us</p>
          <p>Help Center</p>
          <p>Contact Us</p>
          <p>Report Abuse</p>
          <p>Policies & Rules</p>
        </div>{" "}
        <div className={styles.col}>
          <p>CONTENTS</p>
          <p>About Us</p>
          <p>Help Center</p>
          <p>Contact Us</p>
          <p>Report Abuse</p>
          <p>Policies & Rules</p>
        </div>
      </div>
      <div>
        <p>Copyright MFGD, India</p>
        <p>Follow Us On</p>
      </div>
    </footer>
  );
};

export default Footer;
