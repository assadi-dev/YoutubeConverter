import React, { useState, useCallback } from "react";

const Input = ({ ...props }) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = useCallback(() => {
    setFocus(!focus);
  }, [focus]);

  return (
    <div className={`inputForm ${focus ? "inputActive" : ""}`}>
      <input
        type="text"
        {...props}
        onFocus={handleFocus}
        onBlur={handleFocus}
        placeholder="https://www.youtube.com/watch?v=ABcderr"
      />
    </div>
  );
};

export default Input;
