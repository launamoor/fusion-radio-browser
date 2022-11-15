import { FaCheck, FaTrash } from "react-icons/fa";

const Popup = function ({ className, success, children }) {
  return (
    <div
      className={`alert ${
        success === "success" ? "alert-success" : "alert-error"
      } text-xl w-max sm:text-2xl font-bold ${
        success === "success" ? "text-neutral" : "text-gray-300"
      }  shadow-lg ${className}`}
      success={success}
    >
      {success === "success" ? (
        <FaCheck className="text-3xl text-neutral" />
      ) : (
        <FaTrash className="text-3xl text-gray-300" />
      )}
      <span>{children}</span>
    </div>
  );
};

export default Popup;
