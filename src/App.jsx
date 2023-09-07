import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import Navigation from './components/Navigation'
import Page from './components/Page'
import Portrait from './components/Portrait';
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

        {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}
    </div>
  )
}

export default App
