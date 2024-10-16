import React from 'react'
import  { createRoot }  from 'react-dom/client';
import App from './src/App.js'

const container = document.getElementById('root');
const root = createRoot(container);

const isDevelopment = process.env.NODE_ENV === 'development';

const faviconPath = isDevelopment ? 'src/assets/images/favicon.ico?' : '/portfolio/src/assets/images/favicon.ico?';

const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/x-icon';
link.href = faviconPath;
document.head.appendChild(link);

root.render(<App/>);