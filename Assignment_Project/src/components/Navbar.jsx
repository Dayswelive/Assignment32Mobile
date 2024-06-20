import React, { useState } from "react";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaUniversity,
  FaSchool,
  FaBook,
  FaNewspaper,
  FaGraduationCap,
} from "react-icons/fa";
// import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">KolllegeApply</div>
      <div className={`nav-links ${isMobile ? "nav-links-mobile" : ""}`}>
        <a href="#">
          <FaUniversity /> University
        </a>
        <a href="#">
          <FaSchool /> Colleges
        </a>
        <a href="#">
          <FaGraduationCap /> Exams
        </a>
        <a href="#">
          <FaBook /> Courses
        </a>
        <a href="#">
          <FaNewspaper /> News
        </a>
      </div>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for Colleges, Exams, Courses & more..."
        />
      </div>
      <div className="hamburger" onClick={handleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
