import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderTopInfo from "../elements/headerTopInfo";
import HeaderSocialLinks from "../elements/headerSocialLinks";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";

const HeaderTopBarOne = function () {
  return (
    <>
      <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
        <Container>
          <Row>
            <Col xs={12} md={7}>
              <HeaderTopInfo/>
            </Col>
            <Col xs={12} md={5}>
              <div className="top-bar-right text-end">
                <div className="ltn__top-bar-menu mx-auto">
                  <ul>
                    <li>
                      {/* <!-- ltn__social-media --> */}
                      <HeaderSocialLinks/>
                    </li>
                    <li>
                      {/* <!-- header-top-btn --> */}
                      <div className="header-top-btn">
                      <Link href="tel:+919019160966"> <FaPhoneAlt/>  Call Us</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeaderTopBarOne;
