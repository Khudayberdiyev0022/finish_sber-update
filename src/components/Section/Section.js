import React from "react";
import style from "./Section.module.css";
import iconNext from "../../assets/svg/iconNext.svg";
import Frame1 from "../../assets/img/Frame1.png";
import Frame2 from "../../assets/img/Frame2.png";
import { Link } from "react-router-dom";

function Section() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.left}>
            <div className={style.small}>
              <h1>Как безопасно совершать покупки в интернете</h1>
              <div className={style.see}>
                <h2>20 июня 2020 </h2>
                <Link to="/article1">
                  <div className={style.next}>
                    <img src={iconNext} alt="iconNext" />
                  </div>
                </Link>
              </div>
            </div>
            <div className={style.middle}>
              <h1>
                Приложения и программы для родителей и детей, которые помогут
                защитить ребенка в сети
              </h1>
              <div className={style.see}>
                <h2>20 июня 2020 </h2>
                <Link to="/article2">
                  <div className={style.next}>
                    <img src={iconNext} alt="iconNext" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={style.right} id="bgGradient">
            <div
              className={style.image}
              style={{ backgroundImage: `url(${Frame1})` }}
            ></div>
            <h1>
              Какие данные лучше не раскрывать в интернете - статья о
              приватности
            </h1>
            <div className={style.see}>
              <h2>20 июня 2020 </h2>
              <Link to="/article3">
                <div className={style.next}>
                  <img src={iconNext} alt="iconNext" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.center}>
          <div
            className={style.image}
            style={{ backgroundImage: `url(${Frame2})` }}
          ></div>
          <div className={style.content}>
            <h1>
              Какие правила поведения в сети стоит ввести у себя в семье, как
              наладить доверие, избежать детских истерик и родительского
              гиперконтроля
            </h1>
            <div className={style.see}>
              <h2>20 июня 2020 </h2>
              <Link to="/article4">
                <div className={style.next}>
                  <img src={iconNext} alt="iconNext" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.small}>
            <h1>
              Как избежать кибербуллинга и как помочь своему ребенку, если это
              все-таки случилось
            </h1>
            <div className={style.see}>
              <h2>20 июня 2020 </h2>
              <Link to="/article5">
                <div className={style.next}>
                  <img src={iconNext} alt="iconNext" />
                </div>
              </Link>
            </div>
          </div>
          <div className={style.small}>
            <h1>Как уберечь ребенка от вредного и опасного контента в сети</h1>
            <div className={style.see}>
              <h2>20 июня 2020 </h2>
              <Link to="/article6">
                <div className={style.next}>
                  <img src={iconNext} alt="iconNext" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
