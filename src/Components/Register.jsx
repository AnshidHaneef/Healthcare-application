import React from "react";

export const Register = () => {
  return (
    <div
      className="flex justify-center items-center bg-fixed bg-center bg-cover h-screen opacity-90"
      style={{
        backgroundImage:
          "url(https://practicesuite.com/wp-content/uploads/2023/03/virtual-medical-clinic.webp)",
      }}
    >
      <div className="box-content h-96 w-96 p-4 border-4 bg-teal-600 opacity-90 ">
        <h3 className="text-white text-2xl font-semibold items-center flex justify-center">
          Sign Up
        </h3>
        <input
          type="text"
          placeholder="Your Name Here"
          className=" m-4 px-10 flex  items-center justify-center "
        />
        <input type="number" placeholder="Enter your phone Number" className="m-4 px-10" />
        <input type="email"  placeholder="Enter Your email" className="m-4 px-10" />
        <button className=" m-4 px-10 ml-20 "> Submit</button>
      </div>
    </div>
  );
};
