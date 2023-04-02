import { createRoot } from 'react-dom/client';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import './App.scss';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();