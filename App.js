// This is the first thing called by our application
// If the platform using the app is mobile, it points to MobileMain
// If it is over the web, it points to WebMain

import * as React from 'react';
import WebMain from './navigation/WebMain';
import MobileMain from './navigation/MobileMain';
import { Platform } from 'react-native';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewPage from './Components/ViewOnlyComponents/ViewPage';

function App() {
  return(
    // if ios, use MobileMain, if web, use WebMain
    Platform.OS === 'ios' ? <MobileMain /> : <AppsTest />
  );
}

const PageNotFound = () => (
  <div>
    <h1>Page Not Found</h1>
    <p>Oops! The page you're looking for does not exist.</p>
  </div>
);

const AppsTest = () => (
  <Router>
    <Routes>
      {/* Route with URL parameters */}
      <Route path="/view-photos/:parameter1/" element={<ViewPage />} />
      {/* Route for when "/view" parameter is not present */}
      <Route path="/" element={<WebMain />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
);

export default App;