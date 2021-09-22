import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./navbar.module.css";

const Navbar = ({ userId }) => {
  const [admin, setAdmin] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const adminId = process.env.REACT_APP_AUTHSERVICE_USERID;

    if (adminId === userId) {
      setAdmin(true);
    }
  }, [userId]);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.nav_list}>
        <li onClick={handleClick}>
          <NavLink activeClassName={styles.active} to="/pet-list">
            <i className="fas fa-home fa-lg"></i>
            <span className={styles.nav_text}>홈</span>
          </NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink activeClassName={styles.active} to="/contents-list">
            <i className={"fas fa-tablet-alt fa-lg"}></i>
            <span className={styles.nav_text}>커뮤니티</span>
          </NavLink>
        </li>

        <li onClick={handleClick}>
          <NavLink activeClassName={styles.active} to="/profile">
            <i className="fas fa-user fa-lg"></i>
            <span className={styles.nav_text}>나의정보</span>
          </NavLink>
        </li>

        {/* {admin && ( */}
        <li onClick={handleClick}>
          <NavLink activeClassName={styles.active} to="/admin">
            <i className="far fa-user fa-lg"></i>
            <span className={styles.nav_text}>관리자</span>
          </NavLink>
        </li>
        {/* )} */}
      </ul>
    </nav>
  );
};

export default Navbar;
