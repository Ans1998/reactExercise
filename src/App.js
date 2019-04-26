import React from 'react';
import './App.css';
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes/config'
function App() {
  return (
      <Router>
          {renderRoutes(routes)}
      </Router>
  );
}

export default App;
