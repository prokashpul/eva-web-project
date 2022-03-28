import React from "react";

import Customlink from "../Customlink/Customlink";
const Links = (props) => {
  const { name, link } = props.link;
  return (
    <li className="text-xl text-gray-100 md:text-black hover:text-cyan-500 py-5 md:py-0">
      <Customlink to={link}>{name}</Customlink>
    </li>
  );
};

export default Links;
