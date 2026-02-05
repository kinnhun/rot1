import Head from 'next/head'
import Layout from '@/components/Layout'
import Navigation from '@/components/Navigation'
import Cursor from '@/components/Cursor'
import { usePageTransitions, usePreloader, useCursorEffects, useMenuToggle, useForceReload } from '@/hooks/useAnimations'

export default function LookBook() {
  usePageTransitions()
  usePreloader()
  useCursorEffects()
  useMenuToggle()
  useForceReload()
  return (
    <>
      <Head>
        <title>Look Book - Bazil Hamard</title>
        <meta name="description" content="Browse through our curated look book featuring selected works and projects." />
        <meta property="og:title" content="Look Book - Bazil Hamard" />
        <meta property="og:description" content="Browse through our curated look book featuring selected works and projects." />
      </Head>

      <Layout>
        <Navigation />
        
        <div className="main">
          <section className="section is--lookbook">
            <div className="container-xl">
              <h1>Look Book</h1>
              <p>A curated collection of my best work and creative projects.</p>
              
              <div className="lookbook-content">
                <div className="lookbook-item">
                  <h3>Selected Works</h3>
                  <p>Highlighting the best of design and photography.</p>
                </div>
                
                <div className="lookbook-item">
                  <h3>Creative Direction</h3>
                  <p>Projects where I led the creative vision.</p>
                </div>
                
                <div className="lookbook-item">
                  <h3>Collaborations</h3>
                  <p>Working with amazing clients and partners.</p>
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
