import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">KolllegeApply</div>
      <div className="nav-links">
        <a href="#">University</a>
        <a href="#">Colleges</a>
        <a href="#">Exams</a>
        <a href="#">Courses</a>
        <a href="#">News</a>
      </div>
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
