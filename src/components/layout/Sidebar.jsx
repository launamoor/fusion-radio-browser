import Menu from "../UI/Menu";
import { FaArrowRight } from "react-icons/fa";
import Button from "../UI/Button";

const Sidebar = function ({ className, toggleSidebar, children }) {
  return (
    <aside
      className={`${className} flex flex-col items-center py-8 px-4 bg-neutral border-l border-base-100 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 2xl:w-1/4 transition-all overflow-y-scroll`}
    >
      <Button
        onClick={toggleSidebar}
        className="btn btn-ghost self-end mb-4 mt-4 mr-10 absolute top-6 right-0 z-20"
      >
        <FaArrowRight className="text-3xl xs:text-xl text-error" />
      </Button>
      <Menu />
      {children}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-auto rounded-lg">
        <div className="text-xs font-light opacity-75">
          <p>Fusion Online 2022 - Bartosz Jozefowicz</p>
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
