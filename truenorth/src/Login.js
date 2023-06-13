import React from "react";

const Login = () => {
  return (
    <div>
      <div className="grid grid-col-l sm:grid-col-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={loginImg} alt="" />
        </div>
        <div className="bg-gray-100 flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto bg-white p-4">
            <h2 className="text-4xl font-bold text-center py-6">natural</h2>
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input className="border p-2" type="text"></input>
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input className="border p-2" type="password"></input>
              <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500">
                Sign In
              </button>
              <div className="flex justify-between">
                <p className="flex items-center ">
                  <input className="mr-2" type="checkbox" />
                  Remember Me
                </p>
                <p>Create Account</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
