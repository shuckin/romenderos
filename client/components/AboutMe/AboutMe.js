import React from "react";
import { Dialog } from "@reach/dialog";
import style from "./style.module.scss";
import "@reach/dialog/styles.css";

export const AboutMe = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <section className={style.about__section}>
      <div className={style.about__inner}>
        <div>
          <div>
            <h1 className={style.about__title}>
              Купи годовой курс занятий летом и получи скидку 25%
            </h1>
            <span className={style.about__subtitle}>
              Подготовься к экзамену с онлайн‑репетитором
            </span>
          </div>
          <div className={style.about__form_inner}>
            <button type="submit" className={style.about__btn} onClick={open}>
              Получить скидку
            </button>

            {/* <form className={style.about__form} method="post" action="#">
              <input
                type="text"
                id="name"
                required=""
                placeholder="Ваше имя"
                maxlength="256"
                name="name"
                className={style.about__input}
              />
              <input
                type="tel"
                id="phone"
                required=""
                placeholder="Ваш телефон"
                maxlength="256"
                name="phone"
                className={style.about__input}
              />

              <button type="submit" className={style.about__btn}>
                Получить скидку
              </button>
            </form> */}
          </div>
        </div>
        <div className={style.about__background_inner}>
          <div className={style.about__background}></div>
        </div>
      </div>
      {/* <div className={style.hero}>
        <div className={style.hero__inner}>
          <div className={style.hero__heading}>
            <div className={style.hero__title}>Первый урок - бесплатно!</div>
            <span className={style.hero__subtitle}>
              Записывайтесь и приходите вместе с ребеном.
            </span>
          </div>
        </div>
      </div> */}
      <Dialog
        isOpen={showDialog}
        onDismiss={close}
        className={style.modalDialog}
      >
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <p>Hello there. I am a dialog</p>
      </Dialog>
    </section>
  );
};
