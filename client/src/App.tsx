import React from 'react';

import { Button } from "@blueprintjs/core";

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Button intent="success" text="button content" onClick={() => { alert("Hi"); }} />
    </div>
  );
}

export default App;
