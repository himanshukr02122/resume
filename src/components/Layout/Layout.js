import React from 'react'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <>
        <main className='resume-section'>{props.children}</main>
        <Footer />
    </>
  )
}

export default Layout
