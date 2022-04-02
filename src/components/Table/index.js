import React from "react";

const Table = ({ header, children, ...props }) => {
  return (
    <div>
      <table {...props}>{children}</table>
    </div>
  );
};

export default Table;
