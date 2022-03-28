import React from "react";

const Link = (props) => {
  const { name, link } = props.link;
  return (
    <li className="text-xl text-gray-100 md:text-black hover:text-teal-300 py-5 md:py-0">
      <a href={link}>{name}</a>
    </li>
  );
};

export default Link;
