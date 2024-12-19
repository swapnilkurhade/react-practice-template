import React from 'react';

const withTheme = (WrappedComponent) => {
  const theme = { color: 'blue', fontSize: '16px' };

  return (props) => <WrappedComponent {...props} theme={theme} />;
};

const ThemeHoc = ({ theme }) => (
  <div style={{ color: theme.color, fontSize: theme.fontSize }}>
    Themed Component
  </div>
);

export default withTheme(ThemeHoc);
