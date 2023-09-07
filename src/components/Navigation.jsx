import React, { useEffect } from 'react';

import '../App.css'
import '../Fonts.css'
import '../Fun.css'

function Navigation(props) {
  const {
    pages = [],
    setCurrentPage, 
    currentPage,

  } = props;

  useEffect(() => {
  document.title = currentPage.name;
  }, [currentPage])
  return (
    // The background of the button container
    <nav className="isabelline-bg">
      {/* Text color is here for buttons */}
      <ul className="text-button d-flex isabelline-bg justify-content-around px-0 rounded">
        {pages.map((Page) => (
          <li
          // Classes for buttons
          className={`
          rounded font-family wiggle-on-hover
          ${currentPage.name === Page.name && "navActive"}
          `} key = {Page.name}
          >
            <span className='button-fill nav-border rounded m-0 p-2 ' onClick={() => setCurrentPage(Page)}>
              {Page.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
