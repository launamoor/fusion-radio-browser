import { FaPlay, FaStop, FaPause } from "react-icons/fa";
import Button from "./UI/Button";

const PlayerControls = function ({ play, pause, reload }) {
  return (
    <div className="flex items-center justify-around gap-16">
      <Button
        onClick={pause}
        className="text-base-100 hover:text-warning transition-all"
      >
        <FaPause className="text-3xl" />
      </Button>
      <Button
        onClick={play}
        className="text-base-100 hover:text-accent transition-all"
      >
        <FaPlay className="text-4xl" />
      </Button>
      <Button
        onClick={reload}
        className="text-base-100 hover:text-error transition-all"
      >
        <FaStop className="text-3xl" />
      </Button>
    </div>
  );
};

export default PlayerControls;
