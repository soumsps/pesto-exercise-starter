import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { StateProvider } from './state-management/store';
import './App.css';

function App() {
  return (
    <StateProvider>
      <div className="App">
        <HomePage />
      </div>
    </StateProvider>
  );
}

export default App;
