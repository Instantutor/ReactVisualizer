import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Intake from './Component/intake'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Intake/>
    </div>
  );
}

ReactDOM.render(
  <Intake/>,
  document.getElementById("root")
);

export default App;
