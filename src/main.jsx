// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client'
import { TunnelsProvider } from './contexts/tunnelContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <TunnelsProvider>
    <App />
  </TunnelsProvider>
  // </StrictMode>,
)
