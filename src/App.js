import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, ErrorPage } from './pages/Index'
import {
 Navbar,
 Loading,
 Sidebar,
 SearchBar,
 Footer,
 FirmOverview,
 PracticeAreas,
 AttorneyProfiles,
 ResourceLinks,
 Communities,
 ContactUs,
} from './components'
import React, { useState, useEffect } from 'react'
function App(data) {
 const [loading, setLoading] = useState(true)

 useEffect(() => {
  setTimeout(() => setLoading(false), 5000)
 }, [])
 return (
  <>
   {loading == { data } ? (
    <Router>
     <SearchBar />
     <Navbar />
     <Sidebar />
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
     <Footer />
    </Router>
   ) : (
    <Loading />
   )}
  </>
 )
}

export default App
