import logo from "../../assets/fusion.png";

const Logo = function ({ className }) {
  return (
    <div className={className}>
      <img src={logo} alt="Fusion Online Logo" />
    </div>
  );
};

export default Logo;
