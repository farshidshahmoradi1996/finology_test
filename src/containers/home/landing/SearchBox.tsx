import React from "react";
import { ReactComponent as SearchSvg } from "assets/svg/search.svg";
const SearchBox: React.FC = () => {
  return (
    <div className="hidden md:flex select-none cursor-pointer">
      <SearchSvg className="w-5" />
    </div>
  );
};

export default SearchBox;
