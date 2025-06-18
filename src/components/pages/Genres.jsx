import SearchResults from "../SearchResults";
import { useContext } from "react";
import RadioBrowserContext from "../../context/RadioBrowserContext";

const Genres = () => {
  const { setSelectedGenre } = useContext(RadioBrowserContext);

  const handleChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <div className="flex flex-col items-stretch justify-start w-full">
      <h2 className="text-4xl font-bold text-gradient-dark self-center mb-4">
        Genres
      </h2>
      <div className="w-full flex justify-center items-center">
        <div className="dropdown dropdown-center mb-8">
          <select
            onChange={handleChange}
            className="input input-primary"
            name="dropdown"
            id="dropdown"
          >
            <option value="" defaultChecked disabled>
              Search By Genre
            </option>
            <option value="metal">Metal</option>
            <option value="rock">Rock</option>
            <option value="jazz">Jazz</option>
            <option value="classic">Classic</option>
            <option value="dance">Dance</option>
            <option value="ambient">Ambient</option>
            <option value="pop">Pop</option>
          </select>
        </div>
      </div>

      <SearchResults />
    </div>
  );
};

export default Genres;
