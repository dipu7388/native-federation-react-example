import React from "react";
import ReactDOM from "react-dom";

export function App() {
  return (
    <div id="container">
      <h1>Flights</h1>
      <div>
          <input type="text" placeholder="From"></input>
      </div>
      <div>
          <input type="text" placeholder="To"></input>
      </div>
      <div>
          <button id="search">Search!</button>
          <button id="terms">Terms...</button>
      </div>
    </div>
  );
}

class Mfe1Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('react-mf1', Mfe1Element);
