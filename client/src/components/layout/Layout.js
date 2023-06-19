import React from 'react'
// import Header from './Header'
import Footer from './Footer'
import ResponsiveAppBar from './TopBar'


function Layout({children}) {
  return (
    <div>
        
        {/* <Header/> */}
        <ResponsiveAppBar/>
        <main style={{ minHeight:"70vh"}}>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout