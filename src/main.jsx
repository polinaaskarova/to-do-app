import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
            <Route path='*' element={<App />} />
        </Routes>
    </BrowserRouter>
)
