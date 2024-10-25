import Link from "next/link";
import Image from "next/image"; // Import the Image component
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import 'react-modal-video/scss/modal-video.scss';

function AboutUsStyleOne({ sectionSpace }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Modal Video Component */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="330peGfEMpY" // Ensure this is the correct video ID
        onClose={() => setOpen(false)}
      />
      
      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-left">
                {/* Use Next.js Image component */}
                <Image 
                  src="/img/photos/starlive16.jpeg" 
                  alt="About Us Image" 
                  layout="responsive" 
                  width={600} // Set the width according to your design
                  height={400} // Set the height according to your design
                />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  <div className="ltn__video-img ltn__animation-pulse1">
                    {/* Use Next.js Image component */}
                    <Image 
                      src="/img/photos/starlive17.jpeg" 
                      alt="video popup bg image" 
                      layout="responsive" 
                      width={600} // Set the width according to your design
                      height={800} // Set the height according to your design
                    />
                    <button
                      onClick={() => {
                        console.log('Button clicked, opening modal');
                        setOpen(true); // This should open the modal
                      }}
                      className="ltn__video-icon-2"
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">
                    Welcome to StarLive: Your Premier Co-living Destination in
                    Bangalore<span>!</span>
                  </h1>
                  <p>
                    Discover a new era of co-living experiences at StarLive, the
                    leading real estate rental marketplace in Bangalore. As your
                    trusted partner, we redefine modern living by offering a
                    seamless platform dedicated to Paying Guest (PG)
                    accommodations.
                  </p>
                </div>
                <ul className="ltn__list-item-half clearfix">
                  <li>
                    <i className="flaticon-home-2"></i>
                    Diverse Accommodations
                  </li>
                  <li>
                    <i className="flaticon-mountain"></i>
                    Prime Bangalore Locations
                  </li>
                  <li>
                    <i className="flaticon-heart"></i>
                    Community-Centric Living
                  </li>
                  <li>
                    <i className="flaticon-secure"></i>
                    Complete 24/7 Security
                  </li>
                </ul>
                <div className="ltn__callout bg-overlay-theme-05 mt-30">
                  <p>
                  Living together is great, but how about living together together?<br />
           
                  </p>
                </div>
                <div className="btn-wrapper animated">
                  <Link
                    href="/shop"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    OUR SERVICES
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOne;
