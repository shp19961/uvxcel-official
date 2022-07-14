import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      nav("/resources");
    } catch (err) {
      setError(
        "Invalid credentials, please contact your organisation or try again"
      );
    }
  };

  return (
    <div className="container login mt-4">
      <h1 className="text-center py-5">Login</h1>
      <div className="row justify-content-center">
        <div className="col-6">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                class="form-control"
                placeholder="Email"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary mb-3">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
