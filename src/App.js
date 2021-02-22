import React,{useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import IndexPage from './components/index/Index';

import {switchTheme, theme} from './components/theme/Theme';

function App() {
  return (
      <div>
        <Router>
          <Route path='/' component={() => <IndexPage switchTheme={switchTheme} getTheme={theme}/>}/>
        </Router>
      </div>
  )
}

export default App;