import MenuItem from "../MenuItem";
import { FaHome, FaSearch, FaInfoCircle } from "react-icons/fa";
import { BsHeadphones } from "react-icons/bs";

const Menu = function () {
  return (
    <nav className="flex flex-col items-stretch gap-4 mb-12 self-stretch">
      <MenuItem
        to="/"
        className="flex items-start justify-center xs:justify-start gap-4 menu-item text-xl font-semibold"
      >
        <FaHome className="text-3xl text-current" />
        <span>Home</span>
      </MenuItem>
      <MenuItem
        to="/search"
        className="flex items-start justify-center xs:justify-start gap-4 menu-item text-xl font-semibold"
      >
        <FaSearch className="text-3xl text-current" />
        <span>Search</span>
      </MenuItem>
      <MenuItem
        to="/saved"
        className="flex items-start justify-center xs:justifgy-start gap-4 menu-item text-xl font-semibold"
      >
        <BsHeadphones className="text-3xl text-current" />
        <span>Saved Stations</span>
      </MenuItem>
      <MenuItem
        to="/about"
        className="flex items-start justify-center xs:justify-start gap-4 menu-item text-xl font-semibold"
      >
        <FaInfoCircle className="text-3xl text-current" />
        <span>About</span>
      </MenuItem>
    </nav>
  );
};

export default Menu;
