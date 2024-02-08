import * as React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
const App = () => {

    // these are the frontend routes
    // aka the different pages that you can navigate to using
    // the address bar at the top of your browser
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                </Routes>
            </Router>
        </>
    )
}


export default App;