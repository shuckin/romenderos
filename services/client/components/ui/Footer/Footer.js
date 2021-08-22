import style from "./style.module.css";
import Link from "next/link";
import { UilMobileAndroid, UilEnvelope } from "@iconscout/react-unicons";

export const Footer = ({ menu, global, privacy }) => {
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
            <Link href="/privacy ">Пользовательское соглашение</Link>
          </div>
        </div>

        {/* center */}
        <div className={style.footer__menu}>
          <nav className={style.footer__nav}>
            {columns.map((menu) => {
              const { links, title, id } = menu;
              return (
                <div key={id} className={style.footer__items}>
                  <div className={style.footer__heading}>{title}</div>
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
          <div className={style.footer__heading}>Контакты</div>
          <div className={style.footer__contacts}>
            <div>
              <a href={`tel:${phone}`}>
                <div className={style.footer__contact}>
                  <UilMobileAndroid className={style.icon} />
                  <div className={style.phone__info}>
                    <span className={style.phone}>{phone}</span>
                    <span className={style.callback}>Заказать звонок</span>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href={`mailto:${email}`}>
                <div className={style.footer__contact}>
                  <UilEnvelope className={style.icon} />{" "}
                  <span className={style.email}>{email}</span>
                </div>
              </a>
            </div>
          </div>
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
