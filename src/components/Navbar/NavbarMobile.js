import React, { useState } from "react";
import style from "./NavbarMobile.module.css";
import image from "../../assets/svg/logoBrand.svg";
import logoStatusMobile from "../../assets/svg/logoStatusMobile.svg";
import iconBurger from "../../assets/svg/iconBurger.svg";
import iconClose from "../../assets/svg/iconClose.svg";

const NavbarMobile = () => {
  const [click, setClick] = useState(false);
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.visible}>
          <div
            className={style.logo}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div style={{ display: "flex" }}>
            <div className={style.status}>
              <img src={logoStatusMobile} alt="logoStatusMobile" />
            </div>
            <div
              onClick={() => setClick(true)}
              className={style.menu}
              style={{ backgroundImage: `url(${iconBurger})` }}
            ></div>
          </div>
        </div>
        {click && (
          <div className={style.invisible}>
            <div className={style.top}>
              <div
                onClick={() => setClick(false)}
                className={style.close}
                style={{ backgroundImage: `url(${iconClose})` }}
              ></div>
              <div className={style.content}>
                <a href="/#" onClick={() => setClick(false)}>
                  Тест
                </a>
                <a href="/#" onClick={() => setClick(false)}>
                  Статьи
                </a>
                <a href="/#" onClick={() => setClick(false)}>
                  Полезные материалы
                </a>
              </div>
            </div>
            <div className={style.bottom} style={{ height: "40%" }}>
              <div className={style.buttons}>
                <button className={style.buttonGreen}>
                  <a href="/">Пройти тест с ассистентами Салют</a>
                </button>
                <button className={style.buttonBlack}>
                  <a href="/">Остаться на сайте и пройти тест</a>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarMobile;
