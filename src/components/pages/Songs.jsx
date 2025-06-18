import SearchBar from "../SearchBar";

const Songs = () => {
  return (
    <div className="flex flex-col items-stretch justify-start w-full">
      <h2 className="text-4xl font-bold text-gradient-dark self-center mb-4">
        Search By Songs
      </h2>
      <SearchBar />
    </div>
  );
};

export default Songs;
