import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      alert("added");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container signup mt-4">
      <h1 className="text-center py-5">Signup</h1>
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
              Signup
            </button>
            <div class="mb-3">
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
