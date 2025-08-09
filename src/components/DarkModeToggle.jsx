import React from 'react';

const DarkModeToggle = ({ isDark, toggleDark }) => {
  return (
    <button onClick={toggleDark}>
      {isDark ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;