import React from "react";

const AlertComponent = (props) => {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        {props.message}
      </div>
    </div>
  );
};

export default AlertComponent;
