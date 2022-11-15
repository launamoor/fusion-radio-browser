import { FaPlay } from "react-icons/fa";
import { useContext } from "react";
import RadioBrowserContext from "../context/RadioBrowserContext";
import Button from "./UI/Button";

const SearchItem = function ({
  station: { name, clickcount, tags, url_resolved, stationuuid, bitrate },
}) {
  const { setCurrentRadio } = useContext(RadioBrowserContext);

  const tagsArr = tags.split(",");

  const handleRadioClick = () => {
    setCurrentRadio({
      name: name,
      url: url_resolved,
      uuid: stationuuid,
      tags: tags,
      bitrate: bitrate,
      clickcount: clickcount,
    });
  };

  return (
    <Button
      onClick={handleRadioClick}
      url={url_resolved}
      uuid={stationuuid}
      name={name}
      className="flex flex-col mb-6 glass p-2 rounded-lg hover:opacity-90 transition-all active:scale-95"
    >
      <h3 className="text-lg font-bold">{name.slice(0, 26)}</h3>
      <div className="flex items-center justify-start gap-2">
        <div className="badge badge-success flex items-center justify-start gap-2">
          <FaPlay />
          <span>{clickcount}</span>
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
        {bitrate === 0 ? (
          ""
        ) : (
          <div className="badge badge-info flex items-center justify-start gap-2 whitespace-nowrap">
            <span>{bitrate} kBit/s</span>
          </div>
        )}
      </div>
    </Button>
  );
};

export default SearchItem;
