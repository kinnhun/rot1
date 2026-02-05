import Head from 'next/head'
import Layout from '@/components/Layout'
import Navigation from '@/components/Navigation'
import Cursor from '@/components/Cursor'
import Link from 'next/link'
import { usePageTransitions, usePreloader, useCursorEffects, useMenuToggle, useForceReload } from '@/hooks/useAnimations'

export default function Design() {
  usePageTransitions()
  usePreloader()
  useCursorEffects()
  useMenuToggle()
  useForceReload()
  
  return (
    <>
      <Head>
        <title>Design - Bazil Hamard - Graphic Designer & Webflow Expert</title>
        <meta name="description" content="Freelance Graphic Designer, I bring your ideas to life through bold visuals and refined design aesthetics. Impactful branding and high-end Webflow websites for creatives." />
        <meta property="og:title" content="Design - Bazil Hamard" />
        <meta property="og:description" content="Impactful branding and high-end Webflow websites for creatives." />
      </Head>

      <Layout>
        <Navigation />
        
        <div className="main">
          {/* Hero Section */}
          <section className="section wf-section">
            <div className="container-xl text-align-center">
              <p className="paragraph-tiny">GRAPHIC DESIGNER, WEBDESIGNER & WEBFLOW EXPERT</p>
              <h1 className="heading-display">
                Impactful branding and high-end<br />
                Webflow websites for creatives.
              </h1>
              <Link href="#contact" className="cta w-button">
                Let's start a project together
              </Link>
            </div>
          </section>

          {/* Client Logos */}
          <section className="section wf-section">
            <div className="container-xl">
              <div className="clients__logo-wrapper">
                <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb63c6228f1b593b10bf8_Jamel.webp" alt="Jamel Debbouze" className="client__logo" />
                <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb651d80446ec420cedc7_MHD.webp" alt="MHD" className="client__logo" />
                <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb651603a6c2d7c52c6f9_Supermood.webp" alt="Supermood" className="client__logo" />
                <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/645bb6514df11f2e6b081671_RES.webp" alt="Rock en Seine" className="client__logo" />
              </div>
            </div>
          </section>
          
          {/* Portfolio Grid - Look Book Style */}
          <section className="section wf-section">
            <div className="container-xl">
              <div className="lookbook__grid">
                <div className="lookbook__item">
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/64f0e1b6e4e6f200b0e8c123_lookbook-1.webp" alt="Portfolio 1" className="lookbook__image" />
                </div>
                <div className="lookbook__item">
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/64f0e1b6e4e6f200b0e8c124_lookbook-2.webp" alt="Portfolio 2" className="lookbook__image" />
                </div>
                <div className="lookbook__item">
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/64f0e1b6e4e6f200b0e8c125_lookbook-3.webp" alt="Portfolio 3" className="lookbook__image" />
                </div>
                <div className="lookbook__item">
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/64f0e1b6e4e6f200b0e8c126_lookbook-4.webp" alt="Portfolio 4" className="lookbook__image" />
                </div>
                <div className="lookbook__item">
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/64f0e1b6e4e6f200b0e8c127_lookbook-5.webp" alt="Portfolio 5" className="lookbook__image" />
                </div>
                <div className="lookbook__item">
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/64f0e1b6e4e6f200b0e8c128_lookbook-6.webp" alt="Portfolio 6" className="lookbook__image" />
                </div>
              </div>
            </div>
          </section>
          
          {/* Text Section - You need a website */}
          <section className="section wf-section">
            <div className="container-xl">
              <div className="w-layout-grid grid-5050">
                <div>
                  <h2 className="heading-outline">You need a website.</h2>
                </div>
                <div>
                  <h2 className="heading-large">You need a high-performing website.</h2>
                  <p className="paragraph-large">
                    This word will make the difference between a simple visit on your website and a sale.
                    Webdesigner and Webflow expert, I help you solve your online visibility challenges 
                    and generate more sales by designing custom websites, art direction dedicated to your 
                    brand and bespoke digital strategies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Projects - Black Background */}
          <section className="section is--black wf-section">
            <div className="container-xl">
              <h2 className="heading-large is--white">Latest projects</h2>
              <div className="w-layout-grid grid-project">
                <Link href="/projet/vhs-entertainment" className="project__link w-inline-block">
                  <div className="project__image-wrapper">
                    <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/64f0e2a1234567890abcdef1_vhs-entertainment.webp" alt="VHS Entertainment" className="project__image" />
                  </div>
                  <h3 className="heading-small is--white">VHS</h3>
                  <p className="paragraph is--white">Direction artistique et refonte du site sur Webflow</p>
                </Link>
                
                <Link href="/projet/alexis-le-rossignol" className="project__link w-inline-block">
                  <div className="project__image-wrapper">
                    <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/64f0e2a1234567890abcdef2_alexis-rossignol.webp" alt="Alexis Le Rossignol" className="project__image" />
                  </div>
                  <h3 className="heading-small is--white">ALEXIS<br />LE ROSSIGNOL</h3>
                  <p className="paragraph is--white">Conception d'un site Webflow pour le célèbre humoriste</p>
                </Link>
                
                <Link href="/projet/frederic-bau" className="project__link w-inline-block">
                  <div className="project__image-wrapper">
                    <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/64f0e2a1234567890abcdef3_frederic-bau.webp" alt="Frédéric Bau" className="project__image" />
                  </div>
                  <h3 className="heading-small is--white">FRÉDÉRIC BAU</h3>
                  <p className="paragraph is--white">Site portfolio pour le chef pâtissier</p>
                </Link>
              </div>
            </div>
          </section>
          
          {/* Marquee */}
          <div className="section-marquee wf-section">
            <div className="marquee">
              <div className="marquee__wrapper">
                <div className="marquee__text">Show me what you've got ! - Show me what you've got ! - Show me what you got ! - </div>
              </div>
            </div>
          </div>
          
          {/* Services Tags */}
          <section className="section wf-section">
            <div className="container-xl">
              <div className="tag__wrapper">
                <div className="tag">Photography</div>
                <div className="tag">Webflow</div>
                <div className="tag">Webdesign</div>
                <div className="tag">Graphics</div>
                <div className="tag">Strategy</div>
              </div>
            </div>
          </section>

          {/* Branding Section with Images on Right */}
          <section className="section wf-section">
            <div className="container-xl">
              <div className="w-layout-grid grid-5050 align-center">
                <div>
                  <p className="paragraph-tiny is--orange">BRANDING</p>
                  <h2 className="heading-large">Your brand identity at the core of my approach</h2>
                  <p className="paragraph-large">
                    A 360° management of your project!<br /><br />
                    I can craft your graphic identity, edit a corporate brand book, create your
                    entire webdesign and develop your website: I ensure the continuity of your brand identity 
                    and support you during each key step of your project.
                  </p>
                </div>
                <div className="branding__images">
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6450c8d469680c9a03745782_Affiche%20-%20Laura.webp" alt="VHS Entertainment Logo" className="branding__image" />
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6450c8d4a3e63f1f3fb052f6_Affiche%20-%20OMJ.webp" alt="One More Joke Logo" className="branding__image" />
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6450c8d4b3a4686a24208106_Affiche%20-%20Reda.webp" alt="Vacarme Logo" className="branding__image" />
                </div>
              </div>
            </div>
          </section>

          {/* Webdesign Section with Mockup */}
          <section className="section is--grey wf-section">
            <div className="container-xl">
              <div className="w-layout-grid grid-5050 reverse">
                <div className="webdesign__mockup">
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/64f0e3a1234567890abcdef4_webdesign-mockup.webp" alt="Webflow Design Mockup" className="mockup__image" />
                </div>
                <div>
                  <p className="paragraph-tiny is--orange">WEBDESIGN</p>
                  <h2 className="heading-large">Custom websites, high-performing results and easy-to-manage backoffice</h2>
                  <p className="paragraph-large">
                    No template! As a Webflow expert, I create custom websites made to enhance your brand 
                    experience and your productivity. Easy to access, SEO driven and maintenance-free: 
                    Through Webflow I will conceive you a website that meets your ambitions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Visual Communication Section */}
          <section className="section wf-section">
            <div className="container-xl">
              <div className="w-layout-grid grid-5050">
                <div>
                  <p className="paragraph-tiny is--orange">VISUAL COMMUNICATION</p>
                  <h2 className="heading-large">Event-oriented</h2>
                  <p className="paragraph-large">
                    Does your creative project require event communication? With more than 8 years of 
                    experience in this field, I design memorable identities for your events. From the logo 
                    to the poster and the invitation cards: you can focus on the organisation, I will handle 
                    your communication.
                  </p>
                </div>
                <div className="visual-comm__grid">
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6450c8d469680c9a03745782_Affiche%20-%20Laura.webp" alt="Laura Domenge" className="visual-comm__poster" />
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6450c8d4a698eddd8312ecfe_Affiche%20-%20Eric%20%26%20Quentin.webp" alt="Eric et Quentin" className="visual-comm__poster" />
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6450c8d4a3e63f1f3fb052f6_Affiche%20-%20OMJ.webp" alt="One More Joke" className="visual-comm__poster" />
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6450c8d4b3a4686a24208106_Affiche%20-%20Reda.webp" alt="Reda Seddiki" className="visual-comm__poster" />
                  <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6450c8d42c0afc24af8fb044_Affiche%20-%20Adrien.webp" alt="Adrien Montowski" className="visual-comm__poster" />
                </div>
              </div>
            </div>
          </section>

          {/* Photography CTA - Orange Background */}
          <section className="section is--orange wf-section">
            <div className="container-xl text-align-center">
              <p className="paragraph-tiny is--white">PHOTOGRAPHIE</p>
              <h2 className="heading-large is--white">Your memories are in safe hands</h2>
              <p className="paragraph-large is--white">
                As a photographer specialised in brand content and event photography, I cover all of 
                your needs and deliver your photos within 48 hours!
              </p>
              <Link href="/photos" className="cta is--white w-button">
                Explore my photos
              </Link>
            </div>
          </section>

          {/* Testimonials - Black Background */}
          <section className="section is--black wf-section">
            <div className="container-xl text-align-center">
              <p className="paragraph-tiny is--orange">TESTIMONIALS</p>
              <h2 className="heading-large is--white">Your satisfaction comes first</h2>
              <p className="paragraph-large is--white">
                A healthy customer relationship is vital. You can count on me to solve your problems 
                and always make your company grow in a respectful and cheerful way. My clients appreciate 
                my multidisciplinary approach, my reactivity and my ability to listen in order to best 
                respond to their needs.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="section wf-section">
            <div className="container-xl">
              <div className="faq__wrapper">
                <div className="faq__item">
                  <div className="faq__question">
                    <h3 className="heading-small">How long will it take for my site to be operational?</h3>
                    <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6204e4cefa407d267ed35bbc_Arrow_white.svg" alt="Arrow" className="faq__arrow" />
                  </div>
                </div>
                <div className="faq__item">
                  <div className="faq__question">
                    <h3 className="heading-small">Do you offer other services than web design?</h3>
                    <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6204e4cefa407d267ed35bbc_Arrow_white.svg" alt="Arrow" className="faq__arrow" />
                  </div>
                </div>
                <div className="faq__item">
                  <div className="faq__question">
                    <h3 className="heading-small">Why should I use Webflow for my website?</h3>
                    <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6204e4cefa407d267ed35bbc_Arrow_white.svg" alt="Arrow" className="faq__arrow" />
                  </div>
                </div>
                <div className="faq__item">
                  <div className="faq__question">
                    <h3 className="heading-small">I need an e-commerce website, is this within your capabilities?</h3>
                    <img src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/6204e4cefa407d267ed35bbc_Arrow_white.svg" alt="Arrow" className="faq__arrow" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final Section */}
          <section className="section is--grey wf-section">
            <div className="container-xl text-align-center">
              <h2 className="heading-large">Let's meet!</h2>
              <p className="paragraph-large">
                Book a free 15-minute session where we will discuss your project, your issues and how to solve them.
              </p>
              <div className="cta__group">
                <a href="https://calendly.com/bazilhamard/15min" target="_blank" rel="noopener noreferrer" className="cta w-button">
                  Book a free consultation
                </a>
                <Link href="#contact" className="cta is--ghost w-button">
                  Start a project
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
