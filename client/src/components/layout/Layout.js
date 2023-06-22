import React from 'react'
import Footer from './Footer'
import Header from './Header'


function Layout({children}) {
  return (
    <div>
        
        {/* <Header/> */}
        <Header/>
        <main style={{ minHeight:"70vh"}}>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout