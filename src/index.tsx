import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './capa/components/card/card';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);
