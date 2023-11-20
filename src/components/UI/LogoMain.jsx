import logofav from "../../assets/fusionfav-square.png";

const LogoMain = function () {
  return (
    <div className="w-80 md:w-96 mb-24 sm:mb-12 relative">
      <img
        src={logofav}
        alt="Fusion Online Logo"
        className="w-full mix-blend-lighten"
      />
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-gradient-dark absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap cursor-default select-none">
        KEEP IT COMING
      </h2>
    </div>
  );
};

export default LogoMain;
