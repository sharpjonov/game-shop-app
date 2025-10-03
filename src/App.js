import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './pages/Main/Main';

export const AppContext = React.createContext();

function App() {

  const [bag, setBag] = useState(() => {
    const savedBag = localStorage.getItem('bag');
    return savedBag ? JSON.parse(savedBag) : [];
  });

  const [library, setLibrary] = useState(() => {
    const savedLibrary = localStorage.getItem('library');
    return savedLibrary ? JSON.parse(savedLibrary) : [];
  });

  useEffect(() => {
    localStorage.setItem('bag', JSON.stringify(bag));
  }, [bag]);

  useEffect(() => {
    localStorage.setItem('library', JSON.stringify(library));
  }, [library]);

  return (
    <>
      <AppContext.Provider value={{ library, setLibrary, bag, setBag }}>
        <Main />
      </AppContext.Provider>
    </>
  );
}

export default App;
