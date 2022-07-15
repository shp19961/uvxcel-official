import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { FaDownload } from "react-icons/fa";

const Resource = () => {
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container resources">
      <div className="row justify-content-end">
        <div className="col-md-2 col-4  d-flex justify-content-end">
          <button className="btn btn-primary mb-3" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
      <div className="text-center">
        <h4 style={{ textTransform: "capitalize" }}>
          Hello Welcome,
          <br />
          {typeof user.email !== "string" ? "" : user.email.slice(0, -12)}
        </h4>
      </div>
      <div className="row justify-content-center py-5">
        <div className="col-md-4 col-lg-3 col-6">
          <div className="card mb-3 shadow">
            <div className="card-body">
              <FaDownload className="mx-2" />
              resource 1
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 col-6">
          <div className="card mb-3 shadow">
            <div className="card-body">
              <FaDownload className="mx-2" />
              resource 2
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 col-6">
          <div className="card mb-3 shadow">
            <div className="card-body">
              <FaDownload className="mx-2" />
              resource 3
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 col-6">
          <div className="card mb-3 shadow">
            <div className="card-body">
              <FaDownload className="mx-2" />
              resource 4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
