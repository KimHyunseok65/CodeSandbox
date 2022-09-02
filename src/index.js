import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import reactDom from 'react-dom';

reactDom.render(
    <React.StrictMode>
        <app />
    </React.StrictMode>
)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
