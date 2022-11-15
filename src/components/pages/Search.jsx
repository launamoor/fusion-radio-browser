import SearchBar from "../SearchBar";
import SearchResults from "../SearchResults";

const Search = function () {
  return (
    <div className="flex flex-col items-stretch justify-start w-full">
      <h2 className="text-4xl font-bold text-gradient-dark self-center mb-4">
        Search
      </h2>
      <SearchBar />
      <SearchResults />
    </div>
  );
};

export default Search;
