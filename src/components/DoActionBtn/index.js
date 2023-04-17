// react
import React from "react";

// styles
import styles from "./styles.module.css";

export default function DoActionBtn({text}) {
  return (
    <div className={styles.doActionBtnBody}>
      <button>{text}</button>
    </div>
  );
}
