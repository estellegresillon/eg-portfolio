import React from "react";
import { Link } from "react-router-dom";

import { PAGES, BLOG_URL } from "utils/constants";
import "./MenuList.scss";

const MenuList = ({ onClick }) => (
  <>
    {PAGES.map((page) => (
      <Link onClick={onClick} key={page.name} to={page.url}>
        {page.name}
      </Link>
    ))}
    <a target="_blank" rel="noopener noreferrer" href={BLOG_URL}>
      Blog
    </a>
    <p className="mobile-menu-language">EN / FR</p>
  </>
);

export default MenuList;
