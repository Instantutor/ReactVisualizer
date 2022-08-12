import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Intake from './Component/intake'

function App() {
  return (
    <div className="App">
      <Intake/>
    </div>
  );
}

ReactDOM.render(
  <Intake/>,
  document.getElementById("root")
);

export default App;
