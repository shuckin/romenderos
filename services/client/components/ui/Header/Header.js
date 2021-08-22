import { useState } from "react";
import Link from "next/link";
import { UilBars, UilTimes } from "@iconscout/react-unicons";
import style from "./style.module.css";

export const Header = ({ global }) => {
  const [hidden, setHidden] = useState(false);
  const {
    navbar: {
      button: { text, type },
      logoTitle: { title, subtitle },
      phone,
      links,
    },
  } = global;
  return (
    <header className={style.header__section}>
      <div className={style.header__inner}>
        <div className={style.header__body}>
          <div>
            <Link href="/">
              <a>
                <div className={style.header__title}>{title}</div>
                <div className={style.header__subtitle}>{subtitle}</div>
              </a>
            </Link>
          </div>
          <div>
            <nav className={style.header__menu}>
              {links.map((menu) => {
                return (
                  <div key={menu.id}>
                    <Link as={menu.url} href={menu.url}>
                      <a>{menu.text}</a>
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-5 items-center">
            <div className={style.header__phone}>{phone}</div>
            <button
              className={
                !type === "primary"
                  ? `${style.header__btn__secondary}`
                  : `${style.header__btn__secondary}`
              }
            >
              {text}
            </button>
          </div>
          <div>
            {!hidden && (
              <button
                className="text-primary  outline-none lg:hidden"
                onClick={() => {
                  setHidden(!hidden);
                }}
              >
                <UilBars className="w-7 h-7 text-gray-dark" />
              </button>
            )}
          </div>

          <div
            className={
              hidden ? `${style.nav__overlay}` : `${style.nav__overlay_hidden}`
            }
          >
            <div className={style.nav__overlay_inner}>
              <nav className={style.nav__overlay_menu}>
                {links.map((menu) => {
                  return (
                    <div key={menu.id} className={style.nav__overlay_title}>
                      <Link as={menu.url} href={menu.url}>
                        <a
                          onClick={() => {
                            setHidden(!hidden);
                          }}
                        >
                          {menu.text}
                        </a>
                      </Link>
                    </div>
                  );
                })}
              </nav>
              <div className={style.nav__overlay_phone}>{phone}</div>
            </div>
            <UilTimes
              className={style.header__nav_icon}
              onClick={() => {
                setHidden(!hidden);
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
