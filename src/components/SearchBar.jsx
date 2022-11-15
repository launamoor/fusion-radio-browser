import { useContext } from "react";
import RadioBrowserContext from "../context/RadioBrowserContext";

const SearchBar = function () {
  const { typing, setTyping, dataLoaded } = useContext(RadioBrowserContext);
  const handleTyping = (e) => {
    setTyping(e.target.value);
  };

  return (
    <div className="items-stretch w-full mb-12">
      <div className="form-control items-center w-full relative">
        <input
          onChange={handleTyping}
          type="text"
          value={typing}
          placeholder="Search by stations"
          className="input input-bordered input-accent w-full max-w-xs relative z-20"
          disabled={dataLoaded ? false : true}
        />
        <label
          className={`label absolute ${
            typing.length > 0 ? "-bottom-8 left-12" : "bottom-2 left-1/3"
          } transition-all`}
        >
          <span className="label-text-alt transition-all whitespace-nowrap text-accent">
            Please enter at least 3 characters
          </span>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
