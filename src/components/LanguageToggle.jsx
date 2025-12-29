import React, { useState } from 'react';

const LanguageToggle = () => {
  const [language, setLanguage] = useState('cn');

  return (
    <div style={{
      display: 'flex',
      gap: '0.5rem',
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '0.25rem',
      borderRadius: '5px'
    }}>
      <button
        onClick={() => setLanguage('cn')}
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '3px',
          background: language === 'cn' ? 'white' : 'transparent',
          color: language === 'cn' ? '#667eea' : 'white',
          cursor: 'pointer',
          fontWeight: language === 'cn' ? '600' : '400'
        }}
      >
        中文
      </button>
      <button
        onClick={() => setLanguage('en')}
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '3px',
          background: language === 'en' ? 'white' : 'transparent',
          color: language === 'en' ? '#667eea' : 'white',
          cursor: 'pointer',
          fontWeight: language === 'en' ? '600' : '400'
        }}
      >
        English
      </button>
    </div>
  );
};

export default LanguageToggle;