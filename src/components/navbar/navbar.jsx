import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./navbar.module.css";

const Navbar = ({}) => {
  return (
    <>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <NavLink to="/pet-list">
              <i className="fas fa-home fa-lg"></i>
              <span className={styles.nav_text}>홈</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contents-list">
              <i className={"fas fa-tablet-alt fa-lg"}></i>
              <span>커뮤니티</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/profile">
              <i className="fas fa-user fa-lg"></i>
              <span className={styles.nav_text}>나의정보</span>
            </NavLink>
          </li>

          {/* <li>
            <NavLink to="/admin">
              <i className="far fa-user fa-lg"></i>
              <span className={styles.nav_text}>관리자</span>
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
