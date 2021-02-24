import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import IndexPage from './components/index/Index';
import PostPage from './components/post/Post';

import {switchTheme, theme} from './components/feature/Theme';

function App() {
  return (
      <div>
        <Router>
          <Route exact path='/' component={() => <IndexPage switchTheme={switchTheme} getTheme={theme}/>}/>
          <Route exact path='/post/:idx' component={(prop) => <PostPage idx={prop} switchTheme={switchTheme} getTheme={theme}/>} />
        </Router>
      </div>
  )
}

export default App;