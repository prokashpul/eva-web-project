import React from "react";

const Button = (props) => {
  return (
    <div className="bg-green-400 py-2 px-5 rounded-md bottom-0 w-56 text-center duration-500 cursor-pointer  hover:bg-green-700 text-xl uppercase my-4 text-white">
      {props.btn}
    </div>
  );
};

export default Button;
