import { Link as ScrollLink } from "react-scroll";
import { FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo-icon">
            <span>🏠</span>
          </div>
        </div>
        {/* Колонка "Проект" */}
        <div className="footer-column">
          <h3 className="footer-title">Проект</h3>
          <ul>
            <li>
              <ScrollLink to="about" smooth={true} duration={500}>
                О нас
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contacts" smooth={true} duration={500}>
                Контакт
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="works" smooth={true} duration={500}>
                Наши проекты
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="steps" smooth={true} duration={500}>
                Как мы работаем
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Колонка "Соцсети" с иконками */}
        <div className="footer-column">
          <h3 className="footer-title">Соцсети</h3>
          <ul>
            <li>
              <a
                href="https://instagram.com/zacenim.by"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaInstagram className="footer-social-icon" />
                @zacenim.by
              </a>
            </li>
            <li>
              <a
                href="https://t.me/zacenim.by"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaTelegramPlane className="footer-social-icon" />
                @zacenim.by
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@zacenim_by"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaTiktok className="footer-social-icon" />
                @zacenim_by
              </a>
            </li>
          </ul>
        </div>

        {/* Колонка "Контакты" */}
        <div className="footer-column">
          <h3 className="footer-title">Контакты</h3>
          <ul>
            <li>
              <a href="tel:+375123456789">+375 12 345 67 89</a>
            </li>
            <li>
              <a href="mailto:mail@mail.com">mail@mail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
