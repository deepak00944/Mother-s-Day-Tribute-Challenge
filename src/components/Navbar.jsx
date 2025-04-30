"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, X, Menu } from "lucide-react"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <button className="menu-btn" onClick={toggleMenu}>
          <Menu size={24} />
        </button>

        <Link to="/" className="navbar-logo">
          <h1>
            Mother's Day<span>Tribute</span>
          </h1>
        </Link>

        <button className="search-btn" onClick={toggleSearch}>
          <Search size={24} />
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`menu-overlay ${isMenuOpen ? "active" : ""}`}>
          <div className="menu-content">
            <button className="close-menu-btn" onClick={toggleMenu}>
              <X size={24} />
            </button>
            <nav className="overlay-nav">
              <ul className="overlay-links">
                <li>
                  <Link to="/" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={toggleMenu}>
                    About Me
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/categories" onClick={toggleMenu}>
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={toggleMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Search Overlay */}
        <div className={`search-overlay ${isSearchOpen ? "active" : ""}`}>
          <div className="search-content">
            <button className="close-search-btn" onClick={toggleSearch}>
              <X size={24} />
            </button>
            <div className="search-form">
              <input type="text" placeholder="Search articles..." />
              <button type="submit">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
