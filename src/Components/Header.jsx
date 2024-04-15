import React from "react";
import "../Css/header.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <div className="color-e40046 text-white">
        <div className="transfornt-color">
          <Container>
            <Row className="align-items-center">
              <Col>
                <span className="font-12 margin-5">
                  Brand Waali Quality, Bazaar Waali Deal!
                </span>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p className="font-12 margin-5">Impact@Snapdeal</p>
                  </Col>
                  <Col>
                    <p className="font-12 margin-5">Gift Cards</p>
                  </Col>
                  <Col>
                    <p className="font-12 margin-5">Help Center</p>
                  </Col>
                  <Col>
                    <p className="font-12 margin-5">Sell On Snapdeal</p>
                  </Col>
                  <Col>
                    <p className="font-12 margin-5">Download App</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="color-e40046 padding-header text-white">
        <Container>
          <div className="d-flex align-items-center ">
            <div className="w-10">
              <img
                src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
                alt=""
              />
            </div>
            <div className="w-60">
              <div className="d-flex">
                <div className="w-75">
                  <input
                    type="text"
                    placeholder="Search products & brands"
                    className="hearder-search"
                  />
                </div>
                <div>
                  <button className="search-button"><FontAwesomeIcon icon={faMagnifyingGlass} className="pe-2" />Search</button>
                </div>
              </div>
            </div>
            <div className="d-flex w-30 align-items-center justify-content-around">
              <div className="cart pe-3 ps-3 pt-2 pb-2">
                <span className="pe-2">Cart</span>
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <div className="d-flex align-items-center">
                <span className="pe-3">Sign in</span>
                <div className="rounded-circle  user">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
