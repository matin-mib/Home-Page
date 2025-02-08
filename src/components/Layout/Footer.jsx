import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer__row">
          <Col xl={6} className="footer__description">
            <span className="footer__logo">getjob</span>
            <p className="footer__text">
              Ən yaxşı istiqamətləri kəşf edin və unudulmaz təcrübə yaradın
            </p>
          </Col>
          <Col xl={6} className="footer__sections">
            <div className="footer__section">
              <h5 className="footer__title">Şərtlər</h5>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="footer__link">Qaydalar</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link">Öhdəliklər</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link">Məsuliyyət</Link>
                </li>
              </ul>
            </div>
            <div className="footer__section">
              <h5 className="footer__title">Məxfilik Siyasəti</h5>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="footer__link">Məlumat</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link">Təhlükəsizlik</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link">Məxfilik</Link>
                </li>
              </ul>
            </div>
            <div className="footer__section">
              <h5 className="footer__title">Yardım Mərkəzi</h5>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link className="footer__link">Dəstək</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link">Suallar</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link">Əlaqə</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <span className="footer__divider"></span>
      <Container className="footer__container">
        <ul className="footer__socials">
          <li className="footer__social-item">
            <Link className="footer__social-link">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
          <li className="footer__social-item">
            <Link className="footer__social-link">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </li>
          <li className="footer__social-item">
            <Link className="footer__social-link">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
