import Button from "./UI/Button";
import { FaPlay } from "react-icons/fa";

const SavedStationItem = function ({ station, onClick }) {
  const tagsArr = station.tags.split(",");

  return (
    <Button
      onClick={onClick}
      url={station.url_resolved}
      uuid={station.uuid}
      name={station.name}
      className="flex flex-col mb-6 glass p-2 rounded-lg hover:opacity-90 transition-all active:scale-95"
    >
      <h3 className="text-lg font-bold text-start">
        {station.name.slice(0, 26)}
      </h3>
      <div className="flex items-center justify-start gap-2">
        <div className="badge badge-success flex items-center justify-start gap-2">
          <FaPlay />
          <span>{station.clickcount}</span>
        </div>
        {tagsArr.length === 0
          ? ""
          : tagsArr
              .filter((tag, i) => i < 2 && tag !== "" && tag.length < 10)
              .map((tag) => {
                return (
                  <div key={tag} className="badge">
                    {tag}
                  </div>
                );
              })}
        {station.bitrate === 0 ? (
          ""
        ) : (
          <div className="badge badge-info flex items-center justify-start gap-2 whitespace-nowrap">
            <span>{station.bitrate} kBit/s</span>
          </div>
        )}
      </div>
    </Button>
  );
};

export default SavedStationItem;
