// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";

// styles
import styles from "./styles.module.css";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className={styles.footerBody}>
      <div className={styles.footerCont}>
        <div className={styles.logoCont}>
          Estart
          <span>Recipes</span>
        </div>
        <p className={styles.copyrights}>
          &copy; {year} EstartaRecipes &
          <Link target="_blank" to="https://www.estarta.com/Pages/default.aspx">
            <span>Estarta</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
