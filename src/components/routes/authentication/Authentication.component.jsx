import React from "react";
import SignUpForm from "../../sign-up-form/SignUpForm.component";
import SignInForm from "../../sign-in-form/SignInForm.component";
import "./authentication.styles.scss";

function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm className="form" />
      <SignUpForm className="form" />
    </div>
  );
}

export default Authentication;
