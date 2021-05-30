import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import logoBrand from "../../assets/svg/logoBrand.svg";
import logoStatus from "../../assets/svg/logoStatus.svg";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.self.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div
      className={
        scroll
          ? `${style.main} ${style.scrolled}`
          : `${style.main} ${style.notScrolled}`
      }
    >
      <div className={style.container}>
        <a href="/">
          <div className={style.logoBrand}>
            <img src={logoBrand} alt="logoBrand" />
          </div>
        </a>
        <div className={style.content}>
          <a href="/#test">Тест</a>
          <a href="/#article">Статьи</a>
          <a href="/">Полезные материалы</a>
        </div>
        <a href="/">
          <div className={style.logoStatus}>
            <img src={logoStatus} alt="logoStatus" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
