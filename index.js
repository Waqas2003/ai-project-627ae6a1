import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="container">
      <h1>Argentina Football Team</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Argentina_national_football_team_logo.svg/1200px-Argentina_national_football_team_logo.svg.png" alt="Argentina Football Team Logo" />
      <p>The Argentina national football team represents Argentina in men's international football and is controlled by the Argentine Football Association (AFA).</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));