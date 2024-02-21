import React, { useEffect, useState } from 'react';

const withTimeTracking = (WrappedComponent) => {
  const TimeTrackingComponent = (props) => {
    const [timeSpent, setTimeSpent] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeSpent((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    return <WrappedComponent {...props} timeSpent={timeSpent} />;
  };

  return TimeTrackingComponent;
};

export default withTimeTracking;
