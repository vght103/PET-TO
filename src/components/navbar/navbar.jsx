import React from "react";
import { Link } from "react-router-dom";

import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <Link to="/pet-list">
              <i className="fas fa-home fa-lg"></i>
              <span className={styles.nav_text}>홈</span>
            </Link>
          </li>
          <li>
            <Link to="/community">
              <i className="fas fa-map-marker-alt fa-lg"></i>
              <span>커뮤니티</span>
            </Link>
          </li>
          <li>
            <Link to="/chat">
              <i className="far fa-comments fa-lg"></i>
              <span className={styles.nav_text}>채팅</span>
            </Link>
          </li>
          <li>
            <Link to="/my-info">
              <i className="fas fa-user fa-lg"></i>
              <span className={styles.nav_text}>나의정보</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
