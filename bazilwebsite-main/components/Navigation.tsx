import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="black-curtain_transition">
        <div className="panel__wrapper">
          <div className="colorpanel-left"></div>
          <div className="colorpanel-right"></div>
        </div>
      </div>

      <nav className="nav flex-split is--white">
        <div className="container-xl is--menu">
          <Link href="/" className="nav__logo w-inline-block">
            <img
              src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/61defd565b95860877484fe4_Logo_Bazil.svg"
              loading="lazy"
              alt="Logo Bazil"
              className="nav__logo-img"
            />
          </Link>

          <div className="menu__button" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="close">
              <div className="cross is--reverse"></div>
              <div className="cross"></div>
            </div>
          </div>

          <div className={`nav__menu ${menuOpen ? 'show' : 'hide'}`}>
            <Link href="/design" className="nav__item is-transition">
              Design
            </Link>
            <Link href="/photos" className="nav__item is-transition">
              Photos
            </Link>
            <Link href="/look-book" className="nav__item is-transition">
              Look book
            </Link>
            <Link href="/about" className="nav__item is-transition hide">
              About
            </Link>
            
            <a href="mailto:hello@bazil.fr?subject=Contact" className="cta menu w-button">
              hello@bazil.fr
            </a>
          </div>

          <div className="nav__mobile">
            <div className="menu__line is--top"></div>
            
            <Link href="/design" className="nav__item--wrapper w-inline-block">
              <div className="nav__item--title">Design</div>
              <div className="faq__arrow is--mobile">
                <img
                  src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6204e4cefa407d267ed35bbc_Arrow_white.svg"
                  loading="lazy"
                  alt="White arrow"
                  className="faq__arrow--image"
                />
              </div>
              <div className="menu__line"></div>
            </Link>

            <Link href="/photos" className="nav__item--wrapper w-inline-block">
              <div className="nav__item--title">Photos</div>
              <div className="faq__arrow is--mobile">
                <img
                  src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6204e4cefa407d267ed35bbc_Arrow_white.svg"
                  loading="lazy"
                  alt="White arrow"
                  className="faq__arrow--image"
                />
              </div>
              <div className="menu__line"></div>
            </Link>

            <Link href="/look-book" className="nav__item--wrapper w-inline-block">
              <div className="nav__item--title">Look book</div>
              <div className="faq__arrow is--mobile">
                <img
                  src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6204e4cefa407d267ed35bbc_Arrow_white.svg"
                  loading="lazy"
                  alt="White arrow"
                  className="faq__arrow--image"
                />
              </div>
              <div className="menu__line"></div>
            </Link>

            <Link href="/about" className="nav__item--wrapper w-inline-block">
              <div className="nav__item--title">About</div>
              <div className="faq__arrow is--mobile">
                <img
                  src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6204e4cefa407d267ed35bbc_Arrow_white.svg"
                  loading="lazy"
                  alt="White arrow"
                  className="faq__arrow--image"
                />
              </div>
              <div className="menu__line"></div>
            </Link>

            <div className="nav__contact-wrapper">
              <img
                src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/622231122ac5bbd33df08f0c_Cercles-jaunes.svg"
                loading="lazy"
                alt=""
                className="logo__mobile"
              />
              <a href="mailto:hello@bazil.fr?subject=Contact" className="nav__contact">
                hello@bazil.fr
              </a>
              <a href="tel:+33687845893" className="nav__contact">
                06.87.84.58.93
              </a>
            </div>

            <a href="#" className="cta is--p-less w-button">
              Let's start a project !
            </a>

            <div className="nav__rs--wrapper">
              <a href="https://www.instagram.com/bazildesiles/" target="_blank" rel="noopener noreferrer" className="rs__link w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/61dd9ddd76c6a041987a4ccb_RS_insta.webp"
                  loading="lazy"
                  alt="Logo - Instagram"
                  className="rs-img"
                />
              </a>
              <a href="https://www.linkedin.com/in/bazil-hamard/" target="_blank" rel="noopener noreferrer" className="rs__link w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/61dd9ddd76c6a0d11b7a4ccc_RS_Linkedin.webp"
                  loading="lazy"
                  alt="Logo - Linkedin"
                  className="rs-img is--smaller"
                />
              </a>
              <a href="https://webflow.com/bazil" target="_blank" rel="noopener noreferrer" className="rs__link w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6204de9267d23e3e209350e2_Webflow.svg"
                  loading="lazy"
                  alt="Expert Webflow logo"
                  className="rs-img"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
