import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// import tags for pages
import Home from './pages/Home'
import Quickstart from './pages/Quickstart'
import Nav from './components/Nav'
import NavDrawer from './components/NavDrawer'
import DrawerContext from './utils/DrawerContext'
import Custom from './pages/Custom'
const App = () => {

  const [drawerState, setDrawerState] = useState({
    isOpen: false
  })

  drawerState.toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState({ ...drawerState, isOpen: open })
  }

  return (
    <DrawerContext.Provider value={drawerState}>
      <Router>
        <div>
          {/* link tags */}
          <Nav />
          <NavDrawer />
          <Switch>
            <Route exact path="/">
              {/* page tags */}
              <Home />
            </Route>
            <Route path="/quickstart">
              <Quickstart />
            </Route>
            <Route path="/custom">
              <Custom />
            </Route>
            <Route path="/landing">
              <Custom />
            </Route>
            <Route path="/profile">
              <Custom />
            </Route>
            <Route path="/workout">
              <Custom />
            </Route>
          </Switch>
        </div>
      </Router>      
    </DrawerContext.Provider>

  )
}

export default App