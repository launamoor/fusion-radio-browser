import MenuItem from "../MenuItem";
import {
  FaHome,
  FaSearch,
  FaInfoCircle,
  FaGripVertical,
  FaItunesNote,
} from "react-icons/fa";
import { BsHeadphones } from "react-icons/bs";

const Menu = function () {
  return (
    <nav className="flex flex-col items-stretch gap-4 mb-12 self-stretch">
      <MenuItem
        to="/"
        className="flex items-start justify-start xs:justify-start gap-20 menu-item text-3xl sm:text-xl font-semibold"
      >
        <FaHome className="text-4xl sm:text-3xl text-current" />
        <span>Home</span>
      </MenuItem>
      <MenuItem
        to="/search"
        className="flex items-start justify-start xs:justify-start gap-20 menu-item text-3xl sm:text-xl font-semibold"
      >
        <FaSearch className="text-4xl sm:text-3xl text-current" />
        <span>Search</span>
      </MenuItem>
      <MenuItem
        to="/genres"
        className="flex items-start justify-start xs:justify-start gap-20 menu-item text-3xl sm:text-xl font-semibold"
      >
        <FaGripVertical className="text-4xl sm:text-3xl text-current" />
        <span>Genres</span>
      </MenuItem>
      <MenuItem
        to="/login"
        className="flex items-start justify-start xs:justify-start gap-20 menu-item text-3xl sm:text-xl font-semibold"
      >
        <FaItunesNote className="text-4xl sm:text-3xl text-current" />
        <span>Songs</span>
      </MenuItem>
      <MenuItem
        to="/saved"
        className="flex items-start justify-start xs:justifgy-start gap-20 menu-item text-3xl sm:text-xl font-semibold"
      >
        <BsHeadphones className="text-4xl sm:text-3xl text-current" />
        <span>Saved Stations</span>
      </MenuItem>
      <MenuItem
        to="/about"
        className="flex items-start justify-start xs:justify-start gap-20 menu-item text-3xl sm:text-xl font-semibold"
      >
        <FaInfoCircle className="text-4xl sm:text-3xl text-current" />
        <span>About</span>
      </MenuItem>
    </nav>
  );
};

export default Menu;
