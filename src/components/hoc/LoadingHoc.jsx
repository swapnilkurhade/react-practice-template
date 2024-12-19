import React from 'react';

const withLoading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

const LoadingHoc = ({ data }) => <div>Data: {data}</div>;

export default withLoading(LoadingHoc);
