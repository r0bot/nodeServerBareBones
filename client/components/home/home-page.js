import React from 'react';
import mystyle from './home-page.css';

const HomePage = () => {
  return (
    <section className="jumbotron">
      <h1 className={mystyle.test}>Home Page</h1>
      <h1 className="text-danger">some h1</h1>
    </section>
  );
};

export default HomePage;
