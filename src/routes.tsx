import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Match } from './pages/Match';
import { RegisterProfile } from './pages/RegisterProfile';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Match />} />
                <Route path="register" element={<RegisterProfile />} />
            </Routes>
        </BrowserRouter>
    );
}
