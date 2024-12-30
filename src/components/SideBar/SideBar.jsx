import { Link, NavLink } from "react-router-dom";
import LogoN from "../../assets/images/sidelogo.png";
import LogoSubtitle from "../../assets/images/name.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faCog,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faDiscord,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="nav_bar">
      <Link className="logo" to="/">
        <img src={LogoN} alt="logo" />
        <img src={LogoSubtitle} alt="Nidhi" className="sub_logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>

        <NavLink activeclassname="active" to="/about" className="about_link">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>

        <NavLink activeclassname="active" to="/skills" className="skills_link">
          <FontAwesomeIcon icon={faCog} />
        </NavLink>

        <NavLink activeclassname="active" to="/work" className="work_link">
          <FontAwesomeIcon icon={faBriefcase} />
        </NavLink>

        <NavLink
          activeclassname="active"
          to="/contact"
          className="contact_link"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a href="https://www.linkedin.com/in/chiragferwani/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>

        <li>
          <a href="https://github.com/chiragferwani" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/chiragferwani" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>

        <li>
          <a href="https://www.youtube.com/@chiragferwani" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
