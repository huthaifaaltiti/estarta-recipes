// react
import React from "react";

// react-spinners
import MoonLoader from "react-spinners/MoonLoader";

// styles
import styles from "./styles.module.css";

export default function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <MoonLoader className={styles.spinner} color="#392508" />
    </div>
  );
}
