import style from "./style.module.css";
export const ActionCallbackHero = ({ data }) => {
  const {
    heading,
    subheading,
    buttonAction: { textBtn },
  } = data;
  return (
    <section className={style.action}>
      <div className={style.action__inner}>
        <div>
          <div className={style.action__title}>{heading}</div>
          <span className={style.action__subtitle}>{subheading}</span>
        </div>
        <div>
          <button type="submit" className={style.action__btn}>
            {textBtn}
          </button>
        </div>
      </div>
    </section>
  );
};
