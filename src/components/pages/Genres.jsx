import SearchResults from "../SearchResults";
import { useContext } from "react";
import RadioBrowserContext from "../../context/RadioBrowserContext";

const Genres = () => {
  const { setSelectedGenre, selectedGenre } = useContext(RadioBrowserContext);

  const handleChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <div className="flex flex-col items-stretch justify-start w-full">
      <h2 className="text-4xl font-bold text-gradient-dark self-center mb-4">
        Genres
      </h2>
      <div className="w-full flex justify-center items-center">
        <div className="dropdown dropdown-center mb-8 w-3/4">
          <select
            onChange={handleChange}
            className="input input-primary input-md w-full text-center text-lg"
            name="dropdown"
            id="dropdown"
          >
            {!selectedGenre ? <option>Search By Genre</option> : ""}
            <option value="metal">Metal</option>
            <option value="rock">Rock</option>
            <option value="jazz">Jazz</option>
            <option value="classical">Classical</option>
            <option value="dance">Dance</option>
            <option value="ambient">Ambient</option>
            <option value="pop">Pop</option>
            <option value="indie">Indie</option>
            <option value="rap">Rap</option>
            <option value="electronic">Electronic</option>
            <option value="blues">Blues</option>
            <option value="country">Country</option>
            <option value="reggae">Reggae</option>
            <option value="rnb">RnB</option>
            <option value="soul">Soul</option>
          </select>
        </div>
      </div>

      <SearchResults />
    </div>
  );
};

export default Genres;
