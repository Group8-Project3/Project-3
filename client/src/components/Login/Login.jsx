import React from "react";

function Login() {
  return (
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header"></div>
        </div>
      </nav>

      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 loginForm bg-light">
            <h2>Login Form</h2>
            <form class="login">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email-input"
                  placeholder="Email"
                ></input>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password-input"
                  placeholder="Password"
                ></input>
              </div>
              <button type="submit" class="btn btn-default">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

      <a href="/auth/google">Sign In with Google</a>
    </div>
  );
}

export default Login;
