import { useState, useEffect } from "react";
import { FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${!isVisible ? "header-hidden" : ""}`}>
      <div className="header-container">
        {/* Логотип */}
        <div className="logo">
          <div className="logo-icon">
            <span>🏠</span>
          </div>
          <span className="logo-text">zacenim</span>
        </div>

        <button className="burger-btn" onClick={toggleMenu} aria-label="Меню">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            О нас
          </ScrollLink>
          <ScrollLink
            to="contacts"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Контакт
          </ScrollLink>
          <ScrollLink
            to="steps"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Как мы работаем
          </ScrollLink>
          <ScrollLink
            to="works"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Наши проекты
          </ScrollLink>
          <div className="nav-socials">
            <a
              href="https://instagram.com/zacenim.by"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/zacenim.by"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://tiktok.com/@zacenim_by"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
        </nav>

        <div className="socials">
          <a
            href="https://instagram.com/zacenim.by"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://t.me/zacenim.by"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://tiktok.com/@zacenim_by"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
