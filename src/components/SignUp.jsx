import React from "react";

export const SignUp = ({ onSwitchToLogin }) => {
  return (
    <div className="sign-up-container">
      <div className="sign-up-form">
        <h2 className="title text-center">Sign Up</h2>
        <form>
          <div className="input-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="input-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              required
            />
          </div>
          <div className="input-group">
            <label for="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="sign-up-btn">
            Sign Up
          </button>
        </form>
        <div className="links">
          <p onClick={onSwitchToLogin}>
            Already have an account?
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={onSwitchToLogin}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
