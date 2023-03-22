import React from "react";
import "./button.styles.scss";
const button_styles = {
  google: "google-sign-in",
  inverted: "inverted",
  
};
function Button({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`button-container ${button_styles[buttonType]}`}
      {...otherProps}
      >
          {children}
    </button>
  );
}

export default Button;
