import './App.css';
import React from 'react';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log('The value of timelineData is', timelineData);
  console.log('We should use timelineData in our project somehow...');

  return (
    <React.Fragment>
        <header className="App-header">
            <h1 className="App-title">{timelineData.person}</h1> 
        </header>
        <main className="App-main"><Timeline events={timelineData.events} /></main>
    </React.Fragment>
  );
}

export default App;
