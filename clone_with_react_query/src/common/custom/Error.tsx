import React from 'react';
import './Error.scss';

export const Error: React.FC<{ message?: string }> = ({ message }): JSX.Element => {
  if (!message) return <></>;
  return (
    <span className="error_element">
      <span>{message}</span>
    </span>
  );
};
