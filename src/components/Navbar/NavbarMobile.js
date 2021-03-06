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
          <a href="/">
            <div
              className={style.logo}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </a>
          <div style={{ display: "flex" }}>
            <a href="/">
              <div className={style.status}>
                <img src={logoStatusMobile} alt="logoStatusMobile" />
              </div>
            </a>
            <div
              onClick={() => setClick(true)}
              className={style.menu}
              style={{ backgroundImage: `url(${iconBurger})` }}
            ></div>
          </div>
        </div>
        {click && (
          <div className={style.invisible}>
            <div className={style.bgInvisible} />
            <div className={style.top}>
              <div
                onClick={() => setClick(false)}
                className={style.close}
                style={{ backgroundImage: `url(${iconClose})` }}
              ></div>
              <div className={style.content}>
                <a
                  href="/kidssafety/#test"
                  onClick={() => setClick(false)}
                >
                  Тест
                </a>
                <a
                  href="/kidssafety/#article"
                  onClick={() => setClick(false)}
                >
                  Статьи
                </a>
                <a
                  href="/kidssafety/#cyber"
                  onClick={() => setClick(false)}
                >
                  Виды киберугроз
                </a>
                {/*<a*/}
                {/*  href="/kidssafety/#usefull"*/}
                {/*  onClick={() => setClick(false)}*/}
                {/*>*/}
                {/*  Полезные материалы*/}
                {/*</a>*/}
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
                  <a
                    href="/kidssafety/#test"
                    onClick={() => setClick(false)}
                  >
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
