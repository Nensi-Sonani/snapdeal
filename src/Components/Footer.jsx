import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faMoneyBill, faShield } from "@fortawesome/free-solid-svg-icons";
import '../Css/Footer.css';
import { faHireAHelper } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col className="border">
            <div className="text-center my-4">
              <FontAwesomeIcon icon={faMoneyBill} className="font-40 mb-2"/>
              <p className="top-heading">100% Secure Payments</p>
              <p className="subtext mb-1">Moving your card details to a much more</p>
              <p className="subtext">secured place</p>
            </div>
          </Col>
          <Col className="border">
            <div className="text-center my-4">
            <FontAwesomeIcon icon={faShield} className="font-40 mb-2"/>
              <p className="top-heading">TrustPay</p>
              <p className="subtext mb-1">100% Payment Protection. Easy</p>
              <p className="subtext">Return Policy</p>
            </div>
          </Col>
          <Col className="border">
            <div className="text-center my-4">
            <FontAwesomeIcon icon={faHireAHelper} className="font-40 mb-2"/>
              <p className="top-heading">Help Center</p>
              <p className="subtext mb-1">Got a question? Look no further.</p>
              <p className="subtext">Browse our FAQs or submit your query here.</p>
            </div>
          </Col>
          <Col className="border">
            <div className="text-center my-4">
            <FontAwesomeIcon icon={faMobile} className="font-40 mb-2"/>
              <p className="top-heading">Shop on the Go</p>
              <p className="subtext mb-1">Download the app and get exciting</p>
              <p className="subtext">app only offers at your fingertips</p>
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <Col>
            <div>
               <p>Policy Info</p>
               <ul className="list-unstyled">
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
               <p>COMPANY</p>
               <ul className="list-unstyled">
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
               <p>SNAPDEAL BUSINESS</p>
               <ul className="list-unstyled">
                <li>Shopping App</li>
                <li>Sell on Snapdeal</li>
                <li>Media Enquiries</li>
               </ul>
            </div>
          </Col>
          <Col>
            <div>
               <p>POPULAR LINKS</p>
               <ul className="list-unstyled">
                <li>Lehenga</li>
                <li>Kid's Clothing</li>
                <li>Sarees</li>
                <li>Winter Wear</li>
               </ul>
            </div>
          </Col>
          <Col>
            <div>
               <p>SUBSCRIBE</p>
              <div className="d-flex">
              <input type="email" placeholder="Your email address" />
              <button>SUBSCRIBE</button>
              </div>
              <p>Register now to get updates on promotions and <br /> coupons. Or Download App
</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
