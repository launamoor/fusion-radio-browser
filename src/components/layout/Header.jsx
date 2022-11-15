import Logo from "../UI/Logo";
import Button from "../UI/Button";
import { SlMenu } from "react-icons/sl";

const Header = function ({ toggleSidebar }) {
  return (
    <header className="header bg-neutral flex items-center justify-center relative shadow-lg mb-24 pb-16 md:pb-0">
      <Logo className="block lg:w-64 w-52 absolute top-28 md:top-8 md:left-4 lg:top-6 lg:left-4 mix-blend-lighten" />
      <h2 className="text-4xl md:text-5xl font-extrabold text-white py-16">
        just music.
      </h2>
      <Button
        onClick={toggleSidebar}
        className="btn btn-ghost absolute top-12 right-12"
      >
        <SlMenu className="text-3xl text-accent" />
      </Button>
    </header>
  );
};

export default Header;
