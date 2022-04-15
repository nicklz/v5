import React from 'react';
import "./Loader.css";

export const Loader = () => {

  return (
    <>
      <section className="loader-wrapper">
        <div className='loader-slice'></div>
        <div className='loader-slice'></div>
        <div className='loader-slice'></div>
        <div className='loader-slice'></div>
        <div className='loader-slice'></div>
        <div className='loader-slice'></div>
      </section>
    </>
  );
};
