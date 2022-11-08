import React from 'react';

export const MigrationModal = ({ children }) => {
  return (
    <div style={{ height: '500px', textAlign: 'center' }}>
      <h1>Welcome to WELLDONE Wallet</h1>
      {children}
    </div>
  );
};
