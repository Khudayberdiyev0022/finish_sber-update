import React from "react";
import { Link } from "react-router-dom";
import style from "./Article.module.css";
import { cyber } from "./ArticlesList";
import prevArticles from "../../assets/svg/prevArticles.svg"


const Article4 = () => {
  const data = cyber[3];
  return (
    <div className={style.main}>
      <div className={style.top}>
      <div className={style.backArticle}>
          <Link to="/">
          <img src={prevArticles} alt="prevArticles" />
          <p>Назад</p>
          </Link>
        </div>
        <img src={data.img} alt="rasm" />
        <h1>{data.title}</h1>
      </div>
     <div className={style.bgContainer}>
     <div className={style.container}>
        <p>{data.pargraph}</p>
        <h1>{data.h1}</h1>
        <p>{data.p}</p>
        <p>{data.p1}</p>

        <p className={style.italic}>{data.italic}</p>
        <h1>{data.h2}</h1>

        <h2>{data.number1}</h2>
        <p className={style.pargraph}>{data.numberText1}</p>

        <h2>{data.number2}</h2>
        <p className={style.pargraph}>{data.numberText2}</p>

        <h2>{data.number3}</h2>
        <ul>
          <li>{data.numberText3}</li>
          <li>{data.numberText3One}</li>
          <li>{data.numberText3Two}</li>
          <li>{data.numberText3Four}</li>
          <li>{data.numberText3Five}</li>
        </ul>

        <h2>{data.number4}</h2>
        <p className={style.pargraph}>{data.numberText4}</p>

        <h2>{data.number5}</h2>
        <p className={style.pargraph}>{data.numberText5}</p>

        <p>{data.footer1}</p>
        <p>{data.footer2}</p>
      </div>
     </div>
    </div>
  );
};

export default Article4;
