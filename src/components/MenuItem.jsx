import { Link } from "react-router-dom";

const MenuItem = function ({ to, children, className }) {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default MenuItem;
