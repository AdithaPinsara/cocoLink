import React from "react";
import styles from "../css/banner.module.css";
import NavBar from "./NavBar";

const Banner = () => {
  return (
    <>
      <section className={styles.banner}>
        <div>
          <div className={`${styles.banner__container} container`}>
            <div className={styles.banner__contentBlock}>
              <div>
                <h2>harvesting</h2>
                <h3>cultivating new crops to make farmers increase profits</h3>
                <p>
                  Ut enim ad minim quis nostrud exerci sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua nostrud exerci
                  sed.
                </p>
                <a href="#">READ MORE</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
