import { React } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { HomeScreen } from './screen'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
