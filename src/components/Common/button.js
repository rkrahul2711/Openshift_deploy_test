import React from 'react';
import { Button } from 'antd';
 
const ReusableButton = ({ label, onClick, disabled=false, className=''}) => {
  return (
<Button  onClick={onClick} disabled={disabled} className={className}>
      {label}
</Button>
  );
};
 
export default ReusableButton;