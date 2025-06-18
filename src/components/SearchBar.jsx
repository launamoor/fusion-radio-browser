import { useContext } from "react";
import RadioBrowserContext from "../context/RadioBrowserContext";
import { useLocation } from "react-router";

const SearchBar = function () {
  const location = useLocation();

  const { typing, setTyping, typingSpotify, setTypingSpotify } =
    useContext(RadioBrowserContext);
  const handleTyping = (e) => {
    if (location.pathname !== "/songs") {
      setTimeout(() => {}, 300);
      setTyping(e.target.value);
    } else {
      setTimeout(() => {}, 300);
      setTypingSpotify(e.target.value);
    }
  };

  const checkIfCorrectPhrase = () => {
    if (typing.length < 3) {
      return (
        <span className="label-text-alt transition-all whitespace-nowrap text-accent">
          Please enter at least 3 characters
        </span>
      );
    }

    if (typing.toLowerCase().startsWith("rad")) {
      return (
        <span className="label-text-alt transition-all whitespace-nowrap text-accent">
          Please do not search with "radio" phrase
        </span>
      );
    }
  };

  return (
    <div className="items-stretch w-full mb-12">
      <div className="form-control items-center w-full relative">
        <input
          onChange={handleTyping}
          type="text"
          value={location.pathname !== "/songs" ? typing : typingSpotify}
          placeholder="Search by stations"
          className="input input-bordered input-accent w-full max-w-xs relative z-20"
          disabled={false}
        />
        <label
          className={`label absolute ${
            typing.length > 0 ? "-bottom-8 left-12" : "bottom-2 left-1/3"
          } transition-all`}
        >
          {/* <span className="label-text-alt transition-all whitespace-nowrap text-accent">
            Please enter at least 3 characters
          </span> */}
          {checkIfCorrectPhrase()}
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
