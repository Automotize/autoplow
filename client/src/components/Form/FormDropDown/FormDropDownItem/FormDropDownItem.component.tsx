import React from 'react';

const FormDropDownItem: React.FC<{ children: string }> = ({ children }) => {
  return <option value={children?.toLowerCase()}>{children}</option>;
};

export default FormDropDownItem;
