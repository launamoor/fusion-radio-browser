import { FaCheck, FaTrash } from "react-icons/fa";

const Popup = function ({ className, success, children }) {
  return (
    <div
      className={`flex items-center gap-2 text-xl sm:text-2xl font-bold text-${
        success === "success" ? "neutral" : "gray-400"
      } bg-${
        success === "success" ? "success" : "error"
      } py-2 px-4 rounded-lg ${className}`}
      success={success}
    >
      {success === "success" ? (
        <FaCheck className="text-3xl text-neutral" />
      ) : (
        <FaTrash className="text-3xl text-gray-300" />
      )}
      {children}
    </div>
  );
};

export default Popup;
