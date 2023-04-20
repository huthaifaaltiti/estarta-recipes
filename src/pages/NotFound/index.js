// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";

// lottiefiles GIFs
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import notfoundData from "../../assets/gifs/73061-search-not-found.json";

// styles, icon
import styles from "./styles.module.css";
import { RxDashboard } from "react-icons/rx";

export default function NotFound() {
  const notFoundedGIFData = {
    animationData: notfoundData,
  };

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.notFoundPageCont}>
        <Player
          className={styles.player}
          autoplay
          loop
          src={notFoundedGIFData.animationData}
        ></Player>

        <div className={styles.doAnActionCont}>
          <Link to="/">
            <p>
              <span>
                <RxDashboard className={styles.doAnActionIcon} />
              </span>
              <span>Dashboard</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
