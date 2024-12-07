import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';

// Buffer

import { Buffer } from 'buffer';

window.Buffer = Buffer;

// AWS Amplify Configuration
// import Amplify from 'aws-amplify';
// import awsExports from './aws-exports.js'


// Amplify.configure(awsExports);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
)
