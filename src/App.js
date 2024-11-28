import React from "react";
import "./App.css"; 
import Weather from "./Weather"; 

function App() {
  return (
    <div className="App">
      <header className="bg-indigo-600 text-white py-4 text-center">
        <h1>Weather App</h1>
      </header>
      <main>
        <Weather /> {/* Render Weather component */}
      </main>
    </div>
  );
}

export default App;
