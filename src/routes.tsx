import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { Match } from './pages/Match/index';
import { RegisterProfile } from './pages/RegisterProfile/index';

function Router() {
    return (
        <Routes>
            <Route path="match" element={<Match/>} />
            <Route path="register" element={<RegisterProfile/>} />
        </Routes>
    );
}

export default Router;