import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">KollegeApply</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Colleges, Exams, Courses & more..."
        />
      </div>
    </nav>
  );
};

export default Navbar;
