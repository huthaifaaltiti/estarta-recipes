// react
import React from "react";
import { Link } from "react-router-dom";

// Component
import DoActionBtn from "../DoActionBtn/index";

// styles, icon
import styles from "./styles.module.css";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

export default function NavBar() {
  return (
    <div className={styles.navBarBody}>
      <div className={styles.navBarCont}>
        <div className={styles.navBarLogoCont}>
          Estarta
          <span>Recipes</span>
        </div>

        <Link to="/add-recipe">
          <span>
            <DoActionBtn
              text={"Add New Recipe"}
              icon={<AiOutlineAppstoreAdd />}
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
