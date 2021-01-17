import React from "react";
import { Link } from "react-router-dom";

import { PAGES } from "utils/constants";

const MenuList = ({ onClick }) => (
  <>
    {PAGES.map((page) => (
      <Link onClick={onClick} key={page.name} to={page.url}>
        {page.name}
      </Link>
    ))}
  </>
);

export default MenuList;
