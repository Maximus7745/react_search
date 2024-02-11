import React from 'react';
import Result from './Result';
import './Results.css';

function Results({people=[]}){
  const resultsPeople = people.map((human) =>
  <Result human = {human}/>);
    return(
      <section className="results-container">
        {resultsPeople}
      </section>
    );
  };
export default Results;