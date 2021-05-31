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
        <a href="/kidssafety">
          <img className={style.logoBrand} src={logoBrand} alt="logoBrand" />
        </a>
        <div className={style.content}>
          <a href="/kidssafety/#test">Тест</a>
          <a href="/kidssafety/#article">Статьи</a>
          <a href="/kidssafety/#cyber">Виды киберугроз</a>
          {/*<a href="/kidssafety/#usefull">Полезные материалы</a>*/}
        </div>
        <a href="/kidssafety">
          <img className={style.logoStatus} src={logoStatus} alt="logoStatus" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
