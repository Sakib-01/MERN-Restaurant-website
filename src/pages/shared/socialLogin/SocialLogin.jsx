import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignin = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };
      console.log(userInfo);
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignin}
        type="button"
        className="btn bg-white text-gray-800 w-full flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 transition mb-5"
      >
        <FaGoogle className="mr-2" /> Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
