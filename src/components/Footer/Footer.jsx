import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer_container">
      <ul className="links">
        <li>
          <a href="https://github.com/user01101111000" target="_blank">
            <FaGithub className="smicon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.codewars.com/users/user01101111000"
            target="_blank"
          >
            <SiCodewars className="smicon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/elnurguliyev/" target="_blank">
            <FaLinkedin className="smicon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
