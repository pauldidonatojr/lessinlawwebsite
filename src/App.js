import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, ErrorPage } from './pages/Index'
import { Navbar, Sidebar, SearchBar, Footer, FirmOverview, PracticeAreas, AttorneyProfiles, ResourceLinks, Communities, ContactUs } from './components'
import React from 'react'
function App() {
 return (
  <Router>
   <Navbar />
   <Switch>
    <Route exact path="/">
     <Home />
    </Route>

    <Route exact path="/firmoverview">
     <FirmOverview />
    </Route>

    <Route exact path="/practiceareas">
     <PracticeAreas />
    </Route>

    <Route exact path="/attorneyprofiles">
     <AttorneyProfiles />
    </Route>

    <Route exact path="/resourcelinks">
     <ResourceLinks />
    </Route>

    <Route exact path="/communities">
     <Communities />
    </Route>

    <Route exact path="/contactus">
     <ContactUs />
    </Route>

    <Route exact path="/"></Route>
    <Route path="*">
     <ErrorPage />
    </Route>
   </Switch>
   
   <Footer/>
   
  </Router>
 )
}

export default App
