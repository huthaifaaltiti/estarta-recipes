// react
import React from "react";

// styles
import styles from "./styles.module.css";

export default function NavBar() {
  return (
    <div className={styles.navBarBody}>
      <div className={styles.navBarCont}>
        <div className={styles.navBarLogoCont}>
          Estarta
          <span>Recipes</span>
        </div>
      </div>
    </div>
  );
}
