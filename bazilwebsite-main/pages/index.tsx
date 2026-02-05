import Head from 'next/head'
import Layout from '@/components/Layout'
import Navigation from '@/components/Navigation'
import Cursor from '@/components/Cursor'
import Link from 'next/link'
import { 
  usePageTransitions, 
  usePreloader, 
  useCursorEffects, 
  useIntroAnimations,
  useMenuToggle,
  useScrollAnimations,
  useForceReload
} from '@/hooks/useAnimations'

export default function Home() {
  // Initialize all animations
  usePageTransitions()
  usePreloader()
  useCursorEffects()
  useIntroAnimations()
  useMenuToggle()
  useScrollAnimations()
  useForceReload()
  return (
    <>
      <Head>
        <title>Bazil Hamard - Freelance webdesigner & photographer - Paris</title>
        <meta
          name="description"
          content="Webdesigner, Webflow expert & photographer, I help you to create your graphic identity, to perpetuate your brand image and to design a website adapted to your needs."
        />
        <meta property="og:title" content="Bazil Hamard - Freelance webdesigner & photographer - Paris" />
        <meta
          property="og:description"
          content="Webdesigner, Webflow expert & photographer, I help you to create your graphic identity, to perpetuate your brand image and to design a website adapted to your needs."
        />
        <meta
          property="og:image"
          content="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/628765fcceeb973307a9091b_Open%20Graph%20-%201200x630.jpg"
        />
      </Head>

      <Layout>
        <Navigation />
        
        <div className="main">
          <section className="section is--intro">
            <div className="container-xl is--intro">
              <div className="intro__content-wrapper">
                <div className="intro__text is--first">
                  👋, my name is Bazil and I am a freelance
                </div>
                
                <div className="heading-outline__wrapper">
                  <h1 className="heading-outline is--first">
                    <Link href="/design" className="intro__link is--first">
                      Webdesigner
                    </Link>
                  </h1>
                  <div className="intro__title">
                    <Link href="/design" className="intro__link-web">
                      Webdesigner
                    </Link>
                  </div>
                </div>

                <div className="heading-outline__wrapper">
                  <div className="heading-outline">
                    <Link href="/photos" className="intro__link is--second">
                      & Photographer
                    </Link>
                  </div>
                  <div className="heading-xl">
                    <Link href="/photos" className="intro__link-photo is--outline-text">
                      & Photographer
                    </Link>
                  </div>
                </div>

                <div className="intro__bottom-text">
                  <div className="intro__text is--left">
                    based in Paris, France.
                  </div>
                  <div className="intro__clients">
                    <img
                      src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/61f28d9cce707e7605f2bfdc_Audible.webp"
                      loading="lazy"
                      alt="Logo - Audible"
                      className="client__logo"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/65cbab5c94c74c892e74b831_Tissot.webp"
                      loading="lazy"
                      alt="Logo - Tissot"
                      className="client__logo"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/61f2ba65aa262c2ee916df80_OP.webp"
                      loading="lazy"
                      alt="Logo - Olympia Production"
                      className="client__logo"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/61f2ba63c16a7a01bb75d746_Veuve%20Cliquot.webp"
                      loading="lazy"
                      alt="Logo - Veuve Clicquot"
                      className="client__logo"
                    />
                  </div>
                </div>
              </div>

              <img
                src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/627a6ebf32659497910541fb_Photo_profil2.webp"
                loading="lazy"
                alt="Photo portrait of Bazil Hamard, webdesigner and photographer"
                className="intro__photo"
              />

              <div className="intro__buttons">
                <Link href="/design" className="cta__mobile inner--link w-button">
                  See my creations
                </Link>
                <Link href="/photos" className="cta__mobile is--ghost inner--link w-button">
                  Discover my photos
                </Link>
                <Link href="/design" className="cta padding--right inner-link no--mobile is-transition w-button">
                  You need a designer
                </Link>
                <Link href="/photos" className="cta is--ghost no--mobile is-transition w-button">
                  You need a photographer
                </Link>
              </div>
            </div>
          </section>
        </div>

        <Cursor />
      </Layout>
    </>
  )
}
