import Results from './Results';
import React, { useState, useEffect } from 'react';
import './Search.css';

function Search({data=[]}){
  const [searchParams, setSearchParams] = useState("");

  const filteredData = data.filter(
    human => {
      return (
        human
        .name
        .toLowerCase()
        .includes(searchParams.toLowerCase())
      );
    }
  );


  const handleSearch = e => {
    setSearchParams(e.target.value);
  };

    return(
      <div>
        <header>
          <div className="search">
            <input type="search" placeholder="Введите имя для поиска" onChange={handleSearch}/>
          </div>
        </header>
        <main>
          <div className="main-container">
            <Results people={filteredData}/>
          </div>
        </main>
      </div>

    );
    };
export default Search;