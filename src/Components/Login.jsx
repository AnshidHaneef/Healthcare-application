import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

const handleSubmit=(event)=>{
  const [form,setForm] = useState({

  }, )
}

  // const handleSubmit = (event) => {
  //   event.preventDefault() 
  // };

  return (
    <div
      className="flex justify-center items-center bg-fixed bg-center bg-cover h-screen "
      style={{
        backgroundImage:
          "url(https://practicesuite.com/wp-content/uploads/2023/03/virtual-medical-clinic.webp)",
      }}
    >
      <div className="box-content h-80  p-4 border-4 bg-teal-600 opacity-90 flex justify-start items-center flex-col rounded-md border-none  ">
        <h3 className="text-white text-2xl font-semibold items-center flex justify-center mb-4 mt-10">
          Sign In
        </h3>
        <form onSubmit={handleSubmit} >
          <div className="p-2">
            <input 
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              value={email}
              placeholder="Enter Your email"
              className=" px-5 text-sm  w-72 h-8 rounded-sm border-none "
            />
          </div>

          <div className="p-2">
            <input
              type="password"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              placeholder="Enter your Password"
              className=" px-5 w-72 text-sm h-8 rounded-sm border-none"
            />
          </div>
          <button
            type="submit"
            className=" m-4 px-5 bg-blue-700 text-white w-72 h-8 rounded-md "
          >
            Submit
          </button>
        </form>

        <p className="text-sm">
          Dont have an accoount?
          <a className="text-slate-300 font-thin underline" href="">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};
