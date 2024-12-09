import React from "react";

export const Login = () => {
  return (
    <form>
      <div className="mb-3 mt-5 container d-flex flex-column justify-content-center align-items-center">
        <div className="username p-2 w-25">
          <label for="userNameInput" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="userNameInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="password p-2  w-25">
          <label for="inputPassword" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          LogIn
        </button>
      </div>
    </form>
  );
};
