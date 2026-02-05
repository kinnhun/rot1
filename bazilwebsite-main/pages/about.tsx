import Head from 'next/head'
import Layout from '@/components/Layout'
import Navigation from '@/components/Navigation'
import Cursor from '@/components/Cursor'
import { usePageTransitions, usePreloader, useCursorEffects, useMenuToggle, useForceReload } from '@/hooks/useAnimations'

export default function About() {
  usePageTransitions()
  usePreloader()
  useCursorEffects()
  useMenuToggle()
  useForceReload()
  return (
    <>
      <Head>
        <title>About - Bazil Hamard - freelance webdesigner</title>
        <meta name="description" content="Webdesigner with a passion for photography, music and improvisation" />
        <meta property="og:title" content="About - Bazil Hamard - freelance webdesigner" />
        <meta property="og:description" content="Webdesigner with a passion for photography, music and improvisation" />
      </Head>

      <Layout>
        <Navigation />
        
        <div className="main">
          <section className="section is--about">
            <div className="container-xl">
              <h1>About Me</h1>
              <p>Webdesigner with a passion for photography, music and improvisation.</p>
              
              <div className="about-content">
                <h2>Who am I?</h2>
                <p>
                  I'm Bazil Hamard, a freelance webdesigner and photographer based in Paris, France.
                  With years of experience in creating stunning visual experiences, I help brands
                  establish their identity and connect with their audience.
                </p>
                
                <h2>My Skills</h2>
                <ul>
                  <li>Web Design</li>
                  <li>Webflow Development</li>
                  <li>Photography</li>
                  <li>Brand Identity</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <Cursor />
      </Layout>
    </>
  )
}
