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
        <a href="https://google.com">Chrome,</a>
        <a href="https://safari.com">Safari,</a>
        <a href="https://yandex.ru">Yandex,</a>
        <a href="https://mozilla.org">Firefox,</a>
        <a href="https://edge.com">Edge,</a>
        <a href="https://opera.com">Opera.</a>
      </div>
    </div>
  );
}

export default Page404;
