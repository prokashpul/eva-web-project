import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Customlink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link style={{ color: match ? "#66bcd0" : "#000" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default Customlink;
