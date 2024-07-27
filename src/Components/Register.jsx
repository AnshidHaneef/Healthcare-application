import React from "react";

export const Register = () => {
  return (
    <div
      className="flex justify-center items-center bg-fixed bg-center bg-cover h-screen "
      style={{
        backgroundImage:
          "url(https://practicesuite.com/wp-content/uploads/2023/03/virtual-medical-clinic.webp)",
      }}
    >
      <div className="box-content h-96  p-4 border-4 bg-teal-600 opacity-90 flex justify-center items-center flex-col rounded-md border-none  ">
        <h3 className="text-white text-2xl font-semibold items-center flex justify-center  ">
          Sign Up
        </h3>
        <h6 className="text-white  mb-2 font-light tracking-wider text-sm">It's quick and easy</h6>

      <div className="p-2">
      <input
          type="text"
          placeholder="Your Name Here"
          className=" px-5 flex text-sm w-72 h-8 rounded-sm border-none "
        />
      </div>

       <div className="p-2">
       <input
          type="number"
          placeholder="Enter your phone Number"
          className=" px-5 w-72 text-sm h-8 rounded-sm border-none"
        />
       </div>

      <div className="p-2">
              <input
                type="email"
                placeholder="Enter Your email"
                className=" px-5 text-sm  w-72 h-8 rounded-sm border-none "
              />
      </div>

      <div className="p-2">
              <input
                type="password"
                placeholder="Choose a Password"
                className=" px-5 w-72 text-sm h-8 rounded-sm border-none"
              />
      </div>
        <button className=" m-4 px-5 bg-blue-700 text-white w-72 h-8 rounded-md "> Submit</button>
        <p className="text-sm">Already a member? <a className="text-slate-300 font-thin underline" href="">Login Here</a> </p>
      </div>
    </div>
  );
};
