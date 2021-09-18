import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./navbar.module.css";

const Navbar = ({ userId }) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    // const adminId = "FNv4KYNBQeVaW1iGJp12RME2yVC3";
    const adminId = process.env.REACT_APP_AUTHSERVICE_USERID;

    if (adminId === userId) {
      setAdmin(true);
    }
  }, [userId]);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.nav_list}>
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

        {/* {admin && ( */}
        <li>
          <NavLink to="/admin">
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
