import React from 'react';

type Props = {
  onSubmit: () => void;
};

const Form: React.FC<Props> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="form">
      {children}
    </form>
  );
};

export default Form;
