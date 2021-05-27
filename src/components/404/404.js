import React from "react";
import style from "./notfound.module.css";

function Page404() {
  return (
    <div className={style.main}>
      <h1>
        Пожалуйста, воспользуйтесь другим браузером для перехода на страницу
        мероприятия
      </h1>
      <h5>Поддерживаемые браузеры</h5>
      <div className={style.links}>
        <a href="/">Chrome,</a>
        <a href="/">Safari,</a>
        <a href="/">Yandex,</a>
        <a href="/">Firefox,</a>
        <a href="/">Edge,</a>
        <a href="/">Opera.</a>
      </div>
    </div>
  );
}

export default Page404;
