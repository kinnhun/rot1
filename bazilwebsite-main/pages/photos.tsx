import Head from 'next/head'
import Layout from '@/components/Layout'
import Navigation from '@/components/Navigation'
import Cursor from '@/components/Cursor'
import { usePageTransitions, usePreloader, useCursorEffects, useMenuToggle, useForceReload } from '@/hooks/useAnimations'

export default function Photos() {
  usePageTransitions()
  usePreloader()
  useCursorEffects()
  useMenuToggle()
  useForceReload()
  return (
    <>
      <Head>
        <title>Photos - Bazil Hamard - Photographer</title>
        <meta name="description" content="Explore my photography portfolio featuring portraits, events, and creative projects." />
        <meta property="og:title" content="Photos - Bazil Hamard - Photographer" />
        <meta property="og:description" content="Explore my photography portfolio featuring portraits, events, and creative projects." />
      </Head>

      <Layout>
        <Navigation />
        
        <div className="main">
          <section className="section is--photos">
            <div className="container-xl">
              <h1>Photography Portfolio</h1>
              <p>Capturing moments and telling stories through the lens.</p>
              
              <div className="photos-grid">
                <div className="photo-category">
                  <h3>Portraits</h3>
                  <p>Professional portrait photography that captures personality.</p>
                </div>
                
                <div className="photo-category">
                  <h3>Events</h3>
                  <p>Documenting special moments and celebrations.</p>
                </div>
                
                <div className="photo-category">
                  <h3>Creative Projects</h3>
                  <p>Artistic and experimental photography work.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Cursor />
      </Layout>
    </>
  )
}
