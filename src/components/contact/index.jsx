import { Form } from "react-bootstrap";
import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaCheck,
  FaCalendarAlt,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaComments,
  FaPhoneAlt,
  FaArrowDown,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* CONTACT ADDRESS AREA START */}
      <div className="ltn__contact-address-area mb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/10.png" alt="Icon Image" />
                </div>
                <h3>Email Address</h3>
                <p>
                  info@starlives.co.in <br />
                  www.starlive.com
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/11.png" alt="Icon Image" />
                </div>
                <h3>Phone Number</h3>
                <p>
                  +91 9019160966 <br /> +91 9380930526
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/12.png" alt="Icon Image" />
                </div>
                <h3>Office Address</h3>
                <p>
                  96, 29th Main Rd, EWS Colony, BTM 2nd Stage, BTM Layout,
                  Bengaluru, 560076
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT ADDRESS AREA END */}

      {/* CONTACT MESSAGE AREA START */}
      <div className="ltn__contact-message-area mb-120 mb--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__form-box contact-form-box box-shadow white-bg">
                <h4 className="title-2">Get A Quote</h4>
                <form
                  id="contact-form"
                  action="https://getform.io/f/bgdyrroa" // Getform endpoint
                  method="POST"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                        />
                        <span className="inline-icon">
                          <FaUserAlt />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-email ltn__custom-icon">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter email address"
                        />
                        <span className="inline-icon">
                          <FaEnvelope />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item input-item-email ltn__custom-icon">
                        <Form.Select className="nice-select" name="serviceType">
                          <option>Select Service Type</option>
                          <option>single sharing</option>
                          <option>two sharing</option>
                          <option>three sharing</option>
                          <option>four sharing</option>
                          <option>co-Living</option>
  
                        </Form.Select>
                        <span className="inline-icon">
                          <FaArrowDown />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-phone ltn__custom-icon">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Enter phone number"
                        />
                        <span className="inline-icon">
                          <FaPhoneAlt />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="input-item input-item-textarea ltn__custom-icon">
                    <textarea
                      name="message"
                      placeholder="Enter message"
                    ></textarea>
                    <span className="inline-icon">
                      <FaPencilAlt />
                    </span>
                  </div>
                  <p>
                    <label className="input-info-save mb-0">
                      <input type="checkbox" name="agree" /> Save my name, email,
                      and website in this browser for the next time I comment.
                    </label>
                  </p>
                  <div className="btn-wrapper mt-0">
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                      type="submit"
                    >
                      get a free service
                    </button>
                  </div>
                  <p className="form-messege mb-0 mt-20"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT MESSAGE AREA END */}

      {/* GOOGLE MAP AREA START */}
      <div className="google-map mb-120">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.040357507816!2d77.60936387527002!3d12.905126516331809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151ddca75827%3A0x12e1b004e5480a85!2sStarLive%20PG!5e0!3m2!1sen!2sin!4v1710527038250!5m2!1sen!2sin"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      {/* GOOGLE MAP AREA END */}
    </>
  );
};

export default Contact;
