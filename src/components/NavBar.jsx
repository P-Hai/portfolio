import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const savedLanguage = localStorage.getItem("language") || "en";
    setTheme(savedTheme);
    setLanguage(savedLanguage);
    applyTheme(savedTheme);
  }, []);

  // Apply theme to document
  const applyTheme = (themeName) => {
    const html = document.documentElement;
    if (themeName === "light") {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }
    localStorage.setItem("theme", themeName);
  };

  // Toggle theme
  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Change language
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    // You can add logic here to change content language
  };

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
         Hai's Personnal Website
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions flex items-center gap-4">
          {/* Language Selector */}
          <div className="language-selector flex gap-2 bg-black-200 rounded-lg p-1">
            <button
              onClick={() => handleLanguageChange("en")}
              className={`px-3 py-1 rounded transition-all ${
                language === "en" 
                  ? "bg-white text-black font-semibold" 
                  : "text-white-50 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange("vi")}
              className={`px-3 py-1 rounded transition-all ${
                language === "vi" 
                  ? "bg-white text-black font-semibold" 
                  : "text-white-50 hover:text-white"
              }`}
            >
              VI
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className="theme-toggle flex items-center justify-center w-10 h-10 rounded-lg bg-black-200 hover:bg-black-50 transition-all"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                {/* Sun Icon */}
                <path d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 10a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 100-2 1 1 0 000 2zm8.485-7.071a1 1 0 010 1.414L17.07 6.07a1 1 0 101.414-1.414l1.414 1.414zm1.071 8.485a1 1 0 011.414 0l1.414 1.414a1 1 0 11-1.414 1.414l-1.414-1.414zM15.5 10a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM2.515 2.929a1 1 0 010 1.414L1.07 5.757a1 1 0 11-1.414-1.414L1.1 1.515a1 1 0 011.414 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                {/* Moon Icon */}
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;