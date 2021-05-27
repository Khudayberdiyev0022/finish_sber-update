import React, { useState } from "react";
import style from "./NavbarMobile.module.css";
import image from "../../assets/svg/logoBrand.svg";
import logoStatusMobile from "../../assets/svg/logoStatusMobile.svg";
import iconBurger from "../../assets/svg/iconBurger.svg";
import iconClose from "../../assets/svg/iconClose.svg";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  const [click, setClick] = useState(false);
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.visible}>
          <Link to="/">
            <div
              className={style.logo}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </Link>
          <div style={{ display: "flex" }}>
            <Link to="/">
              <div className={style.status}>
                <img src={logoStatusMobile} alt="logoStatusMobile" />
              </div>
            </Link>
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
                <a href="#test" onClick={() => setClick(false)}>
                  Тест
                </a>
                <a href="#article" onClick={() => setClick(false)}>
                  Статьи
                </a>
                <a href="/" onClick={() => setClick(false)}>
                  Полезные материалы
                </a>
              </div>
            </div>
            <div className={style.bottom} style={{ height: "40%" }}>
              <div className={style.buttons}>
                <button className={style.buttonGreen}>
                  <a
                    href="http://sberbank.ru/sms/vadzd-website"
                    target="__blank"
                    onClick={() => setClick(false)}
                  >
                    Пройти тест с ассистентами Салют
                  </a>
                </button>
                <button className={style.buttonBlack}>
                  <a href="#test" onClick={() => setClick(false)}>
                    Остаться на сайте и пройти тест
                  </a>
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
