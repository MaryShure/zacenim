import { FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Логотип */}
        <div className="logo">
          <div className="logo-icon">
            {/* Здесь будет круглая иконка. Пока поставим заглушку — круг с цветом */}
            <span>🏠</span>
          </div>
          <span className="logo-text">zacenim</span>
        </div>

        {/* Навигация */}
        <nav className="nav">
          <ScrollLink to="about" smooth={true} duration={500}>
            О нас
          </ScrollLink>
          <ScrollLink to="contacts" smooth={true} duration={500}>
            Контакт
          </ScrollLink>
          <ScrollLink to="steps" smooth={true} duration={500}>
            Как мы работаем
          </ScrollLink>
          <ScrollLink to="works" smooth={true} duration={500}>
            Наши проекты
          </ScrollLink>
        </nav>

        {/* Соцсети */}
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
