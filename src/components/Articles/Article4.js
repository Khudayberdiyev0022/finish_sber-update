import React from "react";
import { Link } from "react-router-dom";
import style from "./Article.module.css";
import { cyber } from "./ArticlesList";
import prevArticles from "../../assets/svg/prevArticles.svg";

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
          <p>{data.paragraph2}</p>
          <h1>{data.h1}</h1>
          <p>{data.p}</p>
          <ul>
            <li>{data.pList1}</li>
            <li>{data.pList2}</li>
            <li>{data.pList3}</li>
          </ul>
          <p>{data.p1}</p>

          <p className={style.italic}>{data.italic}</p>
          <h1>{data.h2}</h1>

          <h2>{data.number1}</h2>
          <p className={style.pargraph}>{data.numberText1}</p>

          <h2>{data.number2}</h2>
          <p className={style.pargraph}>{data.numberText2}</p>
          <p className={style.pargraph}>{data.numberText2Two}</p>
          <p className={style.pargraph}>{data.numberText2Three}</p>

          <h2>{data.number3}</h2>
          <p>{data.numberText3}</p>

          <h2>{data.number4}</h2>
          <p className={style.pargraph}>{data.numberText4}</p>
          <p className={style.pargraph}>{data.numberText4Two}</p>
          <ul>
            <li>{data.numberText4List1}</li>
            <li>{data.numberText4List2}</li>
            <li>{data.numberText4List3}</li>
            <li>{data.numberText4List4}</li>
          </ul>

          <h2>{data.number5}</h2>
          <p className={style.pargraph}>{data.numberText5}</p>

          <p>{data.footer1}</p>
        </div>
      </div>
    </div>
  );
};

export default Article4;
