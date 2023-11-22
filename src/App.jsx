import { useState } from 'react'
import './App.css';
import Counter from './components/Counter.jsx';

export default function App() {
  return (
    <div className="App">
      <Counter />
      <Counter step={5} />
      <Counter step={9} initialValue={369} />
    </div>
  );
}

// export default App;
