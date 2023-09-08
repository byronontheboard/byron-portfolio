import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import Navigation from './components/Navigation'
import Page from './components/Page'
import Portrait from './components/Portrait';
import Footer from './components/Footer';
// import Project from './components/Project'
// import Footer from './components/Footer'


function App() {
  // These will pop up for my Navigation options in the bar
  const [pages] = useState([
    {
      name: "About"
    },
    { 
      name: "Portfolio" 
    },
    {
      name: "Resume"
    },
    { 
      name: "Contact" 
    },
    {
      name: "GitHub"
    }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0])
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div className='d-grid gap-5 font-family'>
        <Header>
          <Navigation 
            // Here is where the 'page' values(navigation buttons go)
            pages = {pages}
            setCurrentPage = {setCurrentPage}
            currentPage = {currentPage}
            ></Navigation>
        </Header>
        <main className='d-grid gap-5'>
          <Portrait></Portrait>
          <Page currentPage = {currentPage}></Page>
        </main>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
