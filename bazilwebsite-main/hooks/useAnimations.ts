import { useEffect } from 'react'

export function usePageTransitions() {
  useEffect(() => {
    try {
      // Page transition click handlers
      const transitionLinks = document.querySelectorAll(
        '.photos__single--link, .intro__link-web, .intro__link-photo, .nav__logo, .nav__item, .inner--link, .splide__link, .photos__link, .collections-link, .nav__item--wrapper, .is-transition'
      )

      const handleTransitionClick = (e: Event) => {
        const target = e.currentTarget as HTMLAnchorElement
        const href = target.getAttribute('href')
        
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
          e.preventDefault()
          
          // Add transition effect
          const curtain = document.querySelector('.black-curtain_transition')
          if (curtain) {
            curtain.classList.add('active')
          }
          
          setTimeout(() => {
            window.location.href = href
          }, 600)
        }
      }

      transitionLinks.forEach(link => {
        link.addEventListener('click', handleTransitionClick)
      })

      return () => {
        transitionLinks.forEach(link => {
          link.removeEventListener('click', handleTransitionClick)
        })
      }
    } catch (error) {
      console.error('Error in usePageTransitions:', error)
    }
  }, [])
}

export function usePreloader() {
  useEffect(() => {
    try {
      const preloader = document.querySelector('.preloader') as HTMLElement
      
      if (preloader) {
        // Hide preloader after page load
        setTimeout(() => {
          preloader.style.opacity = '0'
          setTimeout(() => {
            preloader.style.display = 'none'
          }, 500)
        }, 1500)
      }
    } catch (error) {
      console.error('Error in usePreloader:', error)
    }
  }, [])
}

export function useCursorEffects() {
  useEffect(() => {
    try {
      const cursor = document.querySelector('.cursor') as HTMLElement
      const cursorCircle = document.querySelector('.cursor__circle') as HTMLElement
      
      if (!cursor || !cursorCircle) return

      // Move cursor with mouse
      const moveCursor = (e: MouseEvent) => {
        cursor.style.top = `${e.pageY}px`
        cursor.style.left = `${e.pageX}px`
      }

      // Add hover effects on heading-outline
      const headingWrappers = document.querySelectorAll('.heading-outline__wrapper')
      
      const handleMouseEnter = () => {
        cursorCircle.classList.add('shadow', 'is--larger')
        const cursorImg = cursor.querySelector('.cursor__img') as HTMLElement
        if (cursorImg) {
          cursorImg.classList.add('is--visible')
        }
      }

      const handleMouseLeave = () => {
        cursorCircle.classList.remove('shadow', 'is--larger')
        const cursorImg = cursor.querySelector('.cursor__img') as HTMLElement
        if (cursorImg) {
          cursorImg.classList.remove('is--visible')
        }
      }

      window.addEventListener('mousemove', moveCursor)
      
      headingWrappers.forEach(wrapper => {
        wrapper.addEventListener('mouseenter', handleMouseEnter)
        wrapper.addEventListener('mouseleave', handleMouseLeave)
      })

      return () => {
        window.removeEventListener('mousemove', moveCursor)
        headingWrappers.forEach(wrapper => {
          wrapper.removeEventListener('mouseenter', handleMouseEnter)
          wrapper.removeEventListener('mouseleave', handleMouseLeave)
        })
      }
    } catch (error) {
      console.error('Error in useCursorEffects:', error)
    }
  }, [])
}

export function useIntroAnimations() {
  useEffect(() => {
    try {
      // Intro photo/web link hover effects
      const introLinkPhoto = document.querySelectorAll('.intro__link-photo')
      const introLinkWeb = document.querySelectorAll('.intro__link-web')

      const handlePhotoMouseOver = () => {
        introLinkWeb.forEach(link => link.classList.add('is--outline-text'))
      }

      const handlePhotoMouseOut = () => {
        introLinkWeb.forEach(link => link.classList.remove('is--outline-text'))
      }

      introLinkPhoto.forEach(link => {
        link.addEventListener('mouseover', handlePhotoMouseOver)
        link.addEventListener('mouseout', handlePhotoMouseOut)
      })

      return () => {
        introLinkPhoto.forEach(link => {
          link.removeEventListener('mouseover', handlePhotoMouseOver)
          link.removeEventListener('mouseout', handlePhotoMouseOut)
        })
      }
    } catch (error) {
      console.error('Error in useIntroAnimations:', error)
    }
  }, [])
}

export function useMenuToggle() {
  useEffect(() => {
    try {
      const menuButton = document.querySelector('.menu__button')
      const navMobile = document.querySelector('.nav__mobile')
      const navMenu = document.querySelector('.nav__menu')
      const body = document.body

      if (!menuButton) return

      const toggleMenu = () => {
        menuButton.classList.toggle('active')
        navMobile?.classList.toggle('active')
        navMenu?.classList.toggle('show')
        body.classList.toggle('no-scroll')
      }

      menuButton.addEventListener('click', toggleMenu)

      // Close menu when clicking nav items
      const navItems = document.querySelectorAll('.nav__item--wrapper, .nav__item')
      navItems.forEach(item => {
        item.addEventListener('click', () => {
          if (menuButton.classList.contains('active')) {
            toggleMenu()
          }
        })
      })

      return () => {
        menuButton.removeEventListener('click', toggleMenu)
      }
    } catch (error) {
      console.error('Error in useMenuToggle:', error)
    }
  }, [])
}

export function useScrollAnimations() {
  useEffect(() => {
    try {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      }, observerOptions)

      // Observe elements with animations
      const animatedElements = document.querySelectorAll(
        '.intro__text, .heading-outline, .intro__title, .heading-xl, .intro__photo, .client__logo, .cta'
      )

      animatedElements.forEach(el => observer.observe(el))

      return () => {
        animatedElements.forEach(el => observer.unobserve(el))
      }
    } catch (error) {
      console.error('Error in useScrollAnimations:', error)
    }
  }, [])
}

// Force page reload on back button
export function useForceReload() {
  useEffect(() => {
    try {
      const handlePageShow = (event: PageTransitionEvent) => {
        const historyTraversal = event.persisted || 
          (typeof window.performance !== 'undefined' && 
           window.performance.navigation.type === 2)
        
        if (historyTraversal) {
          window.location.reload()
        }
      }
      
      window.addEventListener('pageshow', handlePageShow)
      
      return () => {
        window.removeEventListener('pageshow', handlePageShow)
      }
    } catch (error) {
      console.error('Error in useForceReload:', error)
    }
  }, [])
}
