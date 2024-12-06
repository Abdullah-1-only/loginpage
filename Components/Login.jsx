"use client";
import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Login = ({ handlelogin }) => {
  const [hint, setHint] = useState(false);
  const [pass, setPass] = useState(false);
  const [isemail, setIsemail] = useState("");
  const [ispassword, setIspassword] = useState("");
 
 

  const handleEmail = (e) => {
    setIsemail(e.target.value);
  };
  const handlePassword = (e) => {
    setIspassword(e.target.value);
  };

  let handleclick = () => {
    setHint(!hint);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlelogin(isemail, ispassword );
    setIsemail("");
    setIspassword("");
    setPass(false);
  };

  const passclick = () => {
    setPass(!pass);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md  ">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Login
          </h2>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter your Email
              </label>
              <input
                onChange={handleEmail}
                type="text"
                id="email"
                value={isemail}
                name="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label // because of form
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>

              <div className="relative w-full">
                <input
                  onChange={handlePassword}
                  type={pass ? `text` : `password`}
                  value={ispassword}
                  placeholder="password"
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />

                <div
                  onClick={passclick}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 cursor-pointer "
                >
                  {pass ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

            </div>

            {hint ? (
              <h1>
                ansari@gmail.com
                <p>123</p>
              </h1>
            ) : (
              ""
            )}

            <h1
              onClick={handleclick}
              className="mx-44 my-4 underline cursor-pointer"
            >
              Hint
            </h1>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
