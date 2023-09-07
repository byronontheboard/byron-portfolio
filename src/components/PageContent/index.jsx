import React from 'react';

const PageContent = (props) => {

  return (
    <div className='none col-12 rounded'>
      {props.children}
    </div>
  );
};

export default PageContent;