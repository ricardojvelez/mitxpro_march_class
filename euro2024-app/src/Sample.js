import React from "react";

const Sample = () => {
  const isDisabled = false;
  const buttonProps = { className: "btn-primary", type: "button" };

  return (
    <div>
      <input type="text" placeholder="Enter your name" />
      <input type="checkbox" checked={true} />
      <button
        {...buttonProps}
        disabled={isDisabled}
        onClick={() => alert("Clicked!")}
      >
        Click me
      </button>
    </div>
  );
};

export default Sample;
