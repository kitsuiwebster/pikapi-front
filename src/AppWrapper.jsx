import React, { useEffect, useState } from 'react';
import Loading from './pages/Loading';

const AppWrapper = ({ children, router }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default AppWrapper;
