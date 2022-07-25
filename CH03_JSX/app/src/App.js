import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Book } from './Book';
import PythonEZPZ from './PythonEZPZ';




function App() {
  console.log("에잇 싯팔")
  return (
    <div className="App">
      <PythonEZPZ/>
    </div>
  );
}

export default App;
