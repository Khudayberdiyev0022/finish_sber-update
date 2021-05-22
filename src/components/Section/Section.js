import React from "react";
import style from "./Section.module.css";
import { AiOutlineEye } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";

function Section() {
  return (
    <div className={style.main}>
      <h3 className={style.headerTitle}>Статьи</h3>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.left}>
            <div className={style.small}>
              <h2>20 июня 2020 </h2>
              <h1>Как безопасно совершать покупки в интернете</h1>
              <div className={style.see}>
                <div className={style.eye}>
                  <AiOutlineEye />
                  <h4>35</h4>
                </div>
                <div className={style.next}>
                  <GrLinkNext />
                </div>
              </div>
            </div>
            <div className={style.middle}>
              <h2>20 июня 2020 </h2>
              <h1>
                Какие правила поведения в сети стоит ввести у себя в семье, как
                наладить доверие, избежать детских истерик и родительского
                гиперконтроля
              </h1>
              <div className={style.see}>
                <div className={style.eye}>
                  <AiOutlineEye />
                  <h4>35</h4>
                </div>
                <div className={style.next}>
                  <GrLinkNext />
                </div>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.image}></div>
            <h2>20 июня 2020 </h2>
            <h1>
              Какие данные лучше не раскрывать в интернете - статья о
              приватности
            </h1>
            <div className={style.see}>
              <div className={style.eye}>
                <AiOutlineEye />
                <h4>35</h4>
              </div>
              <div className={style.next}>
                <GrLinkNext />
              </div>
            </div>
          </div>
        </div>
        <div className={style.center}>
          <div className={style.image}></div>
          <div className={style.content}>
            <h2>20 июня 2020 </h2>
            <h1>
              Приложения и программы для родителей и детей, которые помогут
              защитить ребенка в сети
            </h1>
            <div className={style.see}>
              <div className={style.eye}>
                <AiOutlineEye />
                <h4>35</h4>
              </div>
              <div className={style.next}>
                <GrLinkNext />
              </div>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.small}>
            <h2>20 июня 2020 </h2>
            <h1>
              Как избежать кибербуллинга и как помочь своему ребенку, если это
              все-таки случилось
            </h1>
            <div className={style.see}>
              <div className={style.eye}>
                <AiOutlineEye />
                <h4>35</h4>
              </div>
              <div className={style.next}>
                <GrLinkNext />
              </div>
            </div>
          </div>
          <div className={style.small}>
            <h2>20 июня 2020 </h2>
            <h1>Как уберечь ребенка от вредного и опасного контента в сети</h1>
            <div className={style.see}>
              <div className={style.eye}>
                <AiOutlineEye />
                <h4>35</h4>
              </div>
              <div className={style.next}>
                <GrLinkNext />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
// w:327px

// h: 261px

//h:496

//h: 261

//h: 496

//oq
// w:263
// h:196

// date: 12px

//18px

//58 22
