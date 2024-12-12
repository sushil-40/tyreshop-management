import React, { useState } from "react";

export const Login = ({ onSwitchToSignUp }) => {
  return (
    <form>
      <div className="mb-3 mt-5 container d-flex flex-column justify-content-center align-items-center">
        <div className="username">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="userNameInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="password p-2">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>

        <button type="submit" className="btn btn-primary login-btn mt-3">
          LogIn
        </button>
        <br />

        <p className="reset-password">
          <a href="">Forgot Password</a>
        </p>
        <p className="signup-link" onClick={onSwitchToSignUp}>
          Don't have an account?
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={onSwitchToSignUp}
          >
            Sign Up
          </span>
        </p>
      </div>
    </form>
  );
};
