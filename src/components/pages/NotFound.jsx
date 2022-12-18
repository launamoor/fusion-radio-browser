import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <Link to="/search" className="btn btn-accent">
        Back to Search
      </Link>
    </div>
  );
}

export default NotFound;
