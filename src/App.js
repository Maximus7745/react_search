//import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import loadData from './components/data'
import React, { useState, useEffect } from 'react';



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('swapiData');

    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      const fetchData = async () => {
        try {
          const result = await loadData();
          setData(result);
          localStorage.setItem('swapiData', JSON.stringify(result));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, []);
  return (
    <>
      <Search data={data}/>
    </>
  );
}

export default App;
