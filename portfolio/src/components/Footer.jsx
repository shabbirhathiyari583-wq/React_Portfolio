import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h4 className="fw-bold">
              Shabbir<span>Dev</span>
            </h4>
            <p className="text-secondary mb-0">
              Full Stack Web Developer
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <a href="#" className="footer-icon">
              <FaGithub />
            </a>

            <a href="#" className="footer-icon">
              <FaLinkedin />
            </a>

            <a href="#" className="footer-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
        <hr />

        <div className="text-center">
          <p className="text-secondary mb-0">© 2026 ShabbirDev. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;