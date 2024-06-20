import React from "react";
import styles from "../stylesheets/trendingNow.module.css";
const TrendingNow = () => {
  return (
    <section className={styles.trending_now}>
      <div className={styles.trending_content}>
        <p>Trending Now: CBSE Class 12 Physics Question Paper 2024 Set 3</p>
        <a href="#">Check Now</a>
      </div>
      <div className={styles.trending_content_mobile}>
        <p>Trending Now</p>
      </div>
    </section>
  );
};

export default TrendingNow;
