import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMobile, faMoneyBill, faShield } from "@fortawesome/free-solid-svg-icons";
import '../Css/Footer.css';
import { faCcAmex, faCcDinersClub, faCcMastercard, faCcVisa, faHireAHelper } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col className="border">
            <div className="text-center my-4">
              <FontAwesomeIcon icon={faMoneyBill} className="font-40 mb-2" />
              <p className="top-heading">100% Secure Payments</p>
              <p className="subtext mb-1">Moving your card details to a much more</p>
              <p className="subtext">secured place</p>
            </div>
          </Col>
          <Col className="border">
            <div className="text-center my-4">
              <FontAwesomeIcon icon={faShield} className="font-40 mb-2" />
              <p className="top-heading">TrustPay</p>
              <p className="subtext mb-1">100% Payment Protection. Easy</p>
              <p className="subtext">Return Policy</p>
            </div>
          </Col>
          <Col className="border">
            <div className="text-center my-4">
              <FontAwesomeIcon icon={faHireAHelper} className="font-40 mb-2" />
              <p className="top-heading">Help Center</p>
              <p className="subtext mb-1">Got a question? Look no further.</p>
              <p className="subtext">Browse our FAQs or submit your query here.</p>
            </div>
          </Col>
          <Col className="border">
            <div className="text-center my-4">
              <FontAwesomeIcon icon={faMobile} className="font-40 mb-2" />
              <p className="top-heading">Shop on the Go</p>
              <p className="subtext mb-1">Download the app and get exciting</p>
              <p className="subtext">app only offers at your fingertips</p>
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <Col>
            <div>
              <p className="middle-heading">Policy Info</p>
              <ul className="list-unstyled middle-content">
                <li>Privacy Policy</li>
                <li>Terms of Sale</li>
                <li>Terms of Use</li>
                <li>Report Abuse & Takedown Policy</li>
                <li>Know Your BIS Standard</li>
                <li>Products Under Cumpulsory BIS</li>
                <li>Certification</li>
                <li>FAQ</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <p className="middle-heading">COMPANY</p>
              <ul className="list-unstyled middle-content">
                <li>Impact@Snapdeal</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Sitemap</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <p className="middle-heading">SNAPDEAL BUSINESS</p>
              <ul className="list-unstyled middle-content">
                <li>Shopping App</li>
                <li>Sell on Snapdeal</li>
                <li>Media Enquiries</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <p className="middle-heading">POPULAR LINKS</p>
              <ul className="list-unstyled middle-content">
                <li>Lehenga</li>
                <li>Kid's Clothing</li>
                <li>Sarees</li>
                <li>Winter Wear</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="subscribe">
              <p className="middle-heading">SUBSCRIBE</p>
              <div className="d-flex">
                <input type="email" placeholder="Your email address" />
                <button>SUBSCRIBE</button>
              </div>
              <p className="subscribe-p pt-3">Register now to get updates on promotions and <br /> coupons. <span className="text-primary">Or Download App</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col>
            <p className="social-heading">PAYMENT</p>
            <div className="payment">
              <FontAwesomeIcon icon={faCcVisa} className="pay-icon" />
              <FontAwesomeIcon icon={faCcAmex} className="pay-icon" />
              <FontAwesomeIcon icon={faCcMastercard} className="pay-icon" />
              <FontAwesomeIcon icon={faCcDinersClub} className="pay-icon" />
              <FontAwesomeIcon icon={faCcMastercard} className="pay-icon" />
              <FontAwesomeIcon icon={faMoneyBill} className="pay-icon" />
            </div>
          </Col>
          <Col>
            <p className="social-heading">CONNECT</p>
            <div className="social">
              <img src="https://i4.sdlcdn.com/img/footer/facebook@4x.png" alt="" />
              <img src="https://i1.sdlcdn.com/img/footer/twitter@4x.png" alt="" />
              <img src="https://i4.sdlcdn.com/img/footer/instagram@4x.png" alt="" />
              <img src="https://i2.sdlcdn.com/img/footer/linkedin@4x.png" alt="" />
              <img src="https://i1.sdlcdn.com/img/footer/youtube@4x.png" alt="" />
              <img src="https://i4.sdlcdn.com/img/footer/Telegram-Logo_112x112.png" alt="" />
              <img src="https://i1.sdlcdn.com/img/footer/whatsapp-logo-112x112.png" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col>
            <p className="c-right">Copyright © 2021, Snapdeal Limited. All Rights Reserved</p>
          </Col>
          <Col>
            <div className="d-flex justify-content-end ">
              <p className="c-right">Made for Bharat</p>
              <FontAwesomeIcon icon={faHeart} beat style={{ color: "#fd4b4b", }} className="pt-1 ps-2 heart" />
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Footer;
