import React from 'react';
import styles from './Banner.module.css';

function TopBanner({ saying }: any) {
  return (
    <>
      <div className="">
        <br />
        <div className={styles.div}>
          <img src="../public/JoelHiltonHeadshot.jpg" alt="logo" />
        </div>
        <div className="align-center">
          <br />
          <h1 className={styles.h1}>{saying}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;