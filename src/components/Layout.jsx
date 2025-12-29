import React from 'react';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid #eee',
        marginTop: '2rem'
      }}>
      </footer>
    </div>
  );
};

export default Layout;