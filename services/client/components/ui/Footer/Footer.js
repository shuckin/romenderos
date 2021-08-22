import style from "./style.module.css";
import Link from "next/link";

export const Footer = ({ menu, global }) => {
  const {
    navbar: {
      logoTitle: { title, subtitle },
      links,
      email,
      phone,
    },
    footer: { smallText, columns },
    SocialMedia,
  } = global;
  return (
    <footer className={style.footer}>
      <div className={style.footer__inner}>
        {/* left */}
        <div className={style.footer__left}>
          <div className={style.footer__name}>
            <Link as="#about" href="#about">
              <a>
                <div className={style.footer__title}>{title}</div>
                <div className={style.footer__subtitle}>{subtitle}</div>
              </a>
            </Link>
          </div>
          <div className={style.footer__icons}>
            {SocialMedia.map((social) => {
              const { id, link, img, title } = social;
              console.log(img.url);
              return (
                <a
                  target={link.newTab ? "_blank" : ""}
                  href={link.url}
                  className={style.social__link}
                  key={id}
                >
                  <span className="sr-only">{title}</span>
                  <img
                    src={`http://localhost:1337${img.url}`}
                    alt=""
                    className="w-6 h-6 "
                  />
                </a>
              );
            })}
          </div>
          <div className={style.footer__privacy}>
            <Link as="/privacy" href="/privacy" >Пользовательское соглашение</Link>
          </div>
        </div>

        {/* center */}
        <div className={style.footer__menu}>
          <nav className={style.footer__nav}>
            {columns.map((menu) => {
              const { links, title, id } = menu;
              return (
                <div key={id} className={style.footer__items}>
                  <div className={style.footer__title}>{title}</div>
                  {links.map((link) => {
                    const { url, text } = link;
                    return (
                      <div key={url}>
                        <Link as={url} href={url}>
                          <a className={style.navbar__link}>{text}</a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </nav>
        </div>
        {/* light */}
        <div className={style.footer__right}>
          <div className={style.footer__title}>Контакты</div>
          <div className={style.footer__contact}>
            <div className={style.footer__phone}>{phone}</div>
            <div className={style.footer__email}>{email}</div>
          </div>
          <button type="submit" className={style.footer__btn}>
            Записаться на занятие
          </button>
        </div>
      </div>
      <div className={style.footer__info}>
        <div className={style.footer__copy}>{smallText}</div>
        <div className={style.footer__development}>
          Made by{" "}
          <a href="/" className={style.footer__development_link}>
            {" "}
            shuckin.io
          </a>
        </div>
      </div>
    </footer>
  );
};
