import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./profile.module.css";

const Profile = ({ authService, userObj }) => {
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
    history.push("/");
  };

  return (
    <section className={styles.profile}>
      <div className={styles.header}>
        <h2>나의 정보</h2>
      </div>

      <div className={styles.my_profile}>
        <div className={styles.user_box}>
          <div>
            <img src={userObj.photoURL} alt="" className={styles.user_photo} />
          </div>
          <div className={styles.user_info}>
            <span>{userObj.displayName}</span>
            <span>{userObj.email}</span>
          </div>
        </div>
        <div className={styles.application}>
          <ul className={styles.application_list}>
            <li>
              <i className="far fa-list-alt fa-lg"></i>
              <span>임시보호 신청내역</span>
            </li>
            <li>
              <i className="far fa-heart fa-lg"></i>
              <span>임시보호 관심목록</span>
            </li>
          </ul>
        </div>

        <div className={styles.community}>
          <ul className={styles.community_list}>
            <li>
              <i className="far fa-edit fa-lg"></i>
              <span>커뮤니티 글</span>
            </li>
            <li>
              <i className="far fa-comment-dots fa-lg"></i>
              <span>커뮤니티 댓글</span>
            </li>
          </ul>
        </div>

        <div className={styles.public}>
          <ul className={styles.public_list}>
            <li>
              <i className="fas fa-exclamation-circle fa-lg"></i>
              <span>공지사항</span>
            </li>
            <li>
              <i className="far fa-envelope fa-lg"></i>
              <span>친구초대</span>
            </li>
            <li>
              <i className="fas fa-cog fa-lg"></i>
              <span>설정</span>
            </li>
            <li className={styles.logout}>
              <i className="far fa-user-circle fa-lg"></i>
              <button className={styles.logout_button} onClick={onLogout}>
                로그아웃
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
