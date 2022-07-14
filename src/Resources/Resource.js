import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

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
      <div className="text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Resource;
