// react
import React from "react";

// styles
import styles from "./styles.module.css";

export default function DoActionBtn({ text, icon }) {
  return (
    <div className={styles.doActionBtnBody}>
      {icon ? (
        <button>
          <span className={styles.iconCont}>
            {React.cloneElement(icon, { className: styles.iconClass })}
          </span>
          <span className={styles.textCont}>{text}</span>
        </button>
      ) : (
        <button>
          <span>{text}</span>
        </button>
      )}
    </div>
  );
}
