import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="global">
      <Preloader />
      {children}
    </div>
  )
}

function Preloader() {
  return (
    <div 
      data-w-id="b3d63899-ce32-f543-37fb-da61f1cf9c77" 
      style={{ display: 'flex' }} 
      className="preloader"
    >
      <div className="panel__wrapper">
        <img
          src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/623374ba0955641189595aea_Logo_Bazil-white.svg"
          loading="lazy"
          alt="Bazil logo - white"
          className="preloader__img"
        />
        <div className="panel-left"></div>
        <div className="panel-right"></div>
      </div>
    </div>
  )
}
