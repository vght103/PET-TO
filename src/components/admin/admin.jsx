import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ApplicationItem from "../application_item/application_item";
import styles from "./admin.module.css";

const Admin = ({ getDataService }) => {
  const [applications, setApplications] = useState([]);
  const [lastKey, setLastKey] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDataService //
      .firstApplicationData()
      .then((res) => {
        setApplications(res.applicationArr);
        setLastKey(res.lastKey);
      });
    setLoading(false);
  }, [getDataService]);

  const fetchMoreData = (key) => {
    if (key > 0) {
      setLoading(true);
      getDataService //
        .nextApplicationData(key)
        .then((res) => {
          console.log(res);
          setLastKey(res.lastKey);
          setApplications(applications.concat(res.applicationArr));
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  };

  //무한 스크롤
  const handleScroll = (event) => {
    let scrollTop = event.target.scrollTop;
    let clientHeight = event.target.clientHeight;
    let scrollHeigth = event.target.scrollHeight;
    if (scrollTop + (clientHeight + 1) >= scrollHeigth) {
      fetchMoreData(lastKey);
    }
  };
  document.addEventListener("scroll", handleScroll);

  const testbutton = () => {
    getDataService.nextApplicationData(lastKey);
  };

  return (
    <section className={styles.admin}>
      <div className={styles.header}>
        <h2>관리자 페이지</h2>
      </div>
      <button onClick={testbutton}>testbutton</button>
      <div className={styles.application} onScroll={handleScroll}>
        <h3>임시보호 신청자 리스트</h3>
        <ul onScroll={handleScroll}>
          {applications.map((item) => (
            <ApplicationItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
      {loading && <div className={styles.loading}></div>}
    </section>
  );
};
export default Admin;
