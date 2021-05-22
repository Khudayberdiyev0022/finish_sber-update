import React, { Fragment, useReducer, useState } from "react";
import style from "./Quize.module.css";
import image from "../../assets/svg/6.svg";
import img from "../../assets/img/Component2.png";
import img2 from "../../assets/img/Component3.png";
import img3 from "../../assets/svg/salut.svg";
import img4 from "../../assets/svg/defender.svg";
import update from "../../assets/svg/update.svg";
import fb from "../../assets/svg/Facebook.svg";
import vk from "../../assets/svg/Vk.svg";
import ok from "../../assets/svg/Odnoklassniki.svg";
import iconEye from "../../assets/svg/iconEye.svg";
import iconPrev from "./../../assets/svg/iconPrev.svg";
import { questions } from "./QuestionList";

const initialState = {
  mouseHover: false,
  selected: null,
  clicked: 1,
  q1: false,
  q2: false,
  allScore: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SELECTED":
      return {
        ...state,
        selected: action.payload,
      };
    case "HOVER":
      return {
        ...state,
        mouseHover: action.payload,
      };
    case "BACK":
      return {
        ...state,
        selected: initialState.selected,
      };
    case "CLICKED":
      return {
        ...state,
        clicked: state.clicked + action.payload,
        selected: null,
        allScore: state.allScore + Number(state.selected.score),
      };
    default:
      return state;
  }
};

const Quize = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [resutSee, setResutSee] = useState(false);
  const questionRender = () => {
    return (
      <div className={style.contentContainer}>
        <img className={style.iconEye} src={iconEye} alt="iconEye" />
        <h2>
          {state.clicked < 8 && state.clicked} <span>ИЗ 7 ШАГОВ</span>{" "}
        </h2>
        <h1>{questions[state.clicked - 1][0].answer}</h1>
        <div className={style.info}>
          <div className={style.questions}>
            {state.selected !== null && (
              <div className={`${style.active} ${style.question}`}>
                <h3>{state.selected?.text}</h3>
              </div>
            )}
            {state.clicked < 8 &&
              state.selected === null &&
              questions[state.clicked - 1].map((question) => {
                if (state.selected?.id === question.id) {
                  return null;
                } else {
                  return (
                    <div
                      key={question.id}
                      className={style.question}
                      onClick={() => {
                        dispatch({ type: "SELECTED", payload: question });
                      }}
                      onMouseEnter={() =>
                        dispatch({ type: "HOVER", payload: true })
                      }
                      onMouseLeave={() =>
                        dispatch({ type: "HOVER", payload: false })
                      }
                    >
                      <h3>{question.text}</h3>
                    </div>
                  );
                }
              })}
            {state.selected !== null && (
              <div className={style.answers}>
                <h3>{state.selected.subText}</h3>
              </div>
            )}
            {state.selected !== null && (
              <div className={style.buttons}>
                <div
                  className={style.button2}
                  onClick={() => dispatch({ type: "BACK", payload: 1 })}
                >
                  <h2>Назад</h2>
                </div>
                <div
                  className={style.iconPrev}
                  onClick={() => dispatch({ type: "BACK", payload: 1 })}
                >
                  <img src={iconPrev} alt="iconPrev" />
                </div>
                <div
                  className={style.button1}
                  onClick={() => dispatch({ type: "CLICKED", payload: 1 })}
                >
                  <h2>Следующий вопрос</h2>
                </div>
              </div>
            )}
          </div>
          <div
            className={style.image}
            style={{
              backgroundImage: `url(${state.mouseHover ? img2 : img})`,
            }}
          ></div>
        </div>
      </div>
    );
  };

  const resultRender = () => {
    return (
      <div className={style.mainResult}>
        <h1>
          <span>результат</span> – {state.allScore} баллов
        </h1>
        {state.allScore >= 0 && (
          <div className={style.resultPage}>
            <div className={style.left}>
              {state.allScore < 7 && <h1>Ваша система в опасности!</h1>}
              {state.allScore <= 13 && (
                <Fragment>
                  {state.allScore >= 7 && (
                    <h1>Необходимо установить обновление!</h1>
                  )}
                </Fragment>
              )}
              {state.allScore <= 21 && (
                <Fragment>
                  {state.allScore >= 14 && <h1>Вы надежно защищены!</h1>}
                </Fragment>
              )}

              {state.allScore < 7 && (
                <p>
                  Кажется, вы не обсуждали с ребенком правила безопасности в
                  сети: может быть, он просто еще не дорос до собственных
                  гаджетов, а может, вы сами не считаете это важным. В любом
                  случае, вам вместе с ребенком стоит подтянуть теорию и узнать
                  об опасностях интернета.{" "}
                </p>
              )}
              {state.allScore <= 13 && (
                <Fragment>
                  {state.allScore >= 7 && (
                    <p>
                      Вы знаете о правилах безопасности в сети и говорите о них
                      с ребенком, но вам не хватает регулярности: порой, вы про
                      них забываете, а ребенок не всегда готов делиться с вами
                      подробностями своей интернет-жизни.
                    </p>
                  )}
                </Fragment>
              )}
              {state.allScore <= 21 && (
                <Fragment>
                  {state.allScore >= 14 && (
                    <p>
                      Вы точно знаете, как обезопасить свои личные данные и
                      говорите об этом с ребенком. Но не забывайте, что
                      происходящее в интернете очень быстро меняется и свои
                      знания тоже надо обновлять.
                    </p>
                  )}
                </Fragment>
              )}
            </div>
            <div className={style.right}>
              <div
                className={style.imageRight}
                style={{ backgroundImage: `url(${img4})` }}
              ></div>
            </div>
          </div>
        )}
        <div className={style.iconsAll}>
          <div className={style.iconsGroup}>
            <div className={style.icons}>
              <div className={style.fb}>
                <img src={fb} alt="fb" />
              </div>
              <div className={style.vk}>
                <img src={vk} alt="vk" />
              </div>
              <div className={style.ok}>
                <img src={ok} alt="ok" />
              </div>
            </div>
          </div>
          <div
            className={style.reload}
            onClick={() => window.location.reload()}
          >
            <img src={update} alt="update" />
            <h3>Пройти еще раз</h3>
          </div>
        </div>
      </div>
    );
  };
  const lastSectionRender = () => {
    return (
      <div className={style.lastSection}>
        <h1>
          Ознакомьтесь с результатами теста и узнайте, насколько защищен ваш
          ребенок
        </h1>
        <img src={img3} alt="salut" />
        <div className={style.submit}>
          <h2>Смотреть результаты в Салюте</h2>
        </div>
        <h3
          href="#"
          onClick={() => setResutSee(true)}
          className={style.seeResult}
        >
          Смотреть <br /> на сайте
        </h3>
      </div>
    );
  };

  return (
    <div className={style.main}>
      <div
        className={style.container}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={style.content}>
          {state.clicked < 8 && questionRender()}
          {state.clicked > 7 && !resutSee && lastSectionRender()}
          {resutSee && resultRender()}
        </div>
      </div>
    </div>
  );
};

export default Quize;
