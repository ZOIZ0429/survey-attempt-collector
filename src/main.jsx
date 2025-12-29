import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 导入你的主组件
import './index.css'; // 导入全局样式

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);