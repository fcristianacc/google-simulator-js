import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/google-logo.png"}
          alt="google-logo"
          width="300"
          class="center"
        />
        <input
          id="icon"
          type="text"
          placeholder="Search Google or type a URL"
        />
      </div>
    );
  }
}

export default App;
