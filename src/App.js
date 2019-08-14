import React from 'react';
import Form from './Form'
import Recommendation from './Recommendation'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Recommender</h1>
        <Form/>
        <Recommendation/>
      </header>
    </div>
  );
}

export default App;
