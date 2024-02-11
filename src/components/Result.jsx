import React from 'react';
import './Result.css';

function Result({human}){
    return(
      <div className="card-container">
        <img className="img-card" src="img/avatar.svg" alt="Аватар"/>
        <h2>{human.name}</h2>
        <div className="info">
          <h3>Краткие сведения</h3>
          <ul>
            <li>birth year: {human.birth_year}</li>
            <li>eye color: {human.eye_color}</li>
            <li>gender: {human.gender}</li>
            <li>hair color: {human.hair_color}</li>
            <li>height: {human.height}</li>
            <li>mass: {human.mass}</li>
            <li>skin color: {human.skin_color}</li>
            <li>url: {human.url}</li>
          </ul>
        </div>
      </div>
    );
  };
export default Result;