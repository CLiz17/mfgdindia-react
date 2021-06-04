import React from "react";

//Components
import NavBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CategoriesTab from "../components/CategoriesTab";
import ExploreNow from "../components/ExploreNow";
import Recommendations from "../components/Recommendations";
import Categories from "../components/Categories";
import Brand from "../components/Brand";
import Footer from "../components/Footer";

//Products CSS
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <HeroSection />
      <main className={styles.main}>
        <CategoriesTab />
        <ExploreNow />
        <section className={styles.featured}>
          <Recommendations />
          <Categories />
        </section>
        <Brand />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
