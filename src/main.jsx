// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//     <>
//         <BrowserRouter basename='/core-html'>
//             <App />
//         </BrowserRouter>
//     </>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './styles/theme.css'   // ⬅️ use your CSS tokens

const basename =
    (import.meta.env?.BASE_URL || '/')
        .replace(/\/+$/, '') || '/';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename={basename}>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)
