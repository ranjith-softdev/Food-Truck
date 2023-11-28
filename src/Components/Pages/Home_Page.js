import React, { useState, useEffect } from "react";
import CommonNav from "../Common/Common_Navbar";
import { Container, Row, Col } from "react-bootstrap";
import "../Common/CommonNav.css";
import {
  FaArrowCircleUp,
  FaFacebookSquare,
  FaTwitter,
  FaInstagramSquare
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    lastName: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    lastName: "",
    message: ""
  });

  const validateForm = () => {
    let isValid = true;

    const newErrors = { ...errors };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    // Validate subject
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    } else {
      newErrors.lastName = "";
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Proceed with form submission logic
      console.log("Form submitted:", formData);
      alert("Form Submitted Successfully!");
      setFormData({
        name: "",
        email: "",
        lastName: "",
        message: ""
      });
    } else {
      console.log("Form validation failed");
      alert("Make Sure All The Fields Are Filled Out!");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  /* Scroll  Up  Function */

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 500;

    // Check if the scroll position is at or below 100px
    setIsVisible(scrollY > threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid>
      {/* Shape Divider SVG */}

      <Row>
        <div class="custom-shape-divider-top-1700634111 p-0">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </Row>

      {/* Up Arrow */}

      <div className="position-absolute top-0 end-0 bottom-0 start-0 text-light fs-1">
        <div
          className={`Up_Arrow position-fixed top-100% end-0 bottom-0 p-3 z-5 ${
            isVisible ? "visible" : ""
          }`}
          onClick={scrollToTop}
        >
          
          {isVisible && (<FaArrowCircleUp className="fs-3" />)}
        </div>
      </div>

      {/* Logo */}

      <Row data-aos="fade-up">
        <div className="text-center py-4">
          <img alt="Loading..." className="img-fluid" src="/Images/logo1.png" />
        </div>
      </Row>

      {/* Navbar */}

      <Row id="home" data-aos="fade-up">
        <CommonNav />
      </Row>

      {/* Home Page */}

      <Row className="pt-5" data-aos="fade-up">
        <Col xs={12} sm={6}>
          <div className="mx-auto text-light">
            <h1 className=" display-1 fw-bolder py-3">WELCOME</h1>
            <p>____________________</p>
            <h4 className=" fw-bold">
              "You can't buy happiness, but you can buy ice cream. And that's
              kind of the same thing."
            </h4>
            <h5 className=" py-3">"Life is uncertain. Eat dessert first."</h5>
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div>
            <img
              alt="Loading..."
              className="img-fluid"
              src="/Images/truck.png"
            />
          </div>
        </Col>
      </Row>

      {/* Daily Specials */}

      <Row className="text-light text-center pt-5" data-aos="fade-up">
        <h1 className="display-1 fw-bolder py-3">DAILY SPECIALS</h1>
        <p>____________________</p>
        <h5 className="py-3">Check Out This!</h5>
      </Row>

      {/* Daily Specials Images*/}

      <Row data-aos="fade-up">
        <Col xs={12} sm={6} md={3} className="image-container p-5">
          <div className="d-flex justify-content-center align-items-center flex-column text-light fs-5" data-aos="fade-up">
            <img
              className="img-fluid img-xs img-sm"
              src="/Images/icecream1.png"
              alt="Ice Cream 1"
            />
            <h4 className="pt-2">₹100.00</h4>
            <p>VANILLA ICE CREAM</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="image-container p-5">
          <div className="d-flex justify-content-center align-items-center flex-column text-light fs-5" data-aos="fade-up">
            <img
              className="img-fluid img-xs img-sm"
              src="/Images/icecream2.png"
              alt="Ice Cream 2"
            />
            <h4 className="pt-2">₹40.00</h4>
            <p>MANGO MILKSHAKE</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="image-container p-5">
          <div className="d-flex justify-content-center align-items-center flex-column text-light fs-5" data-aos="fade-up">
            <img
              className="img-fluid img-xs img-sm"
              src="/Images/icecream3.png"
              alt="Ice Cream 3"
            />
            <h4 className="pt-2">₹60.00</h4>
            <p>CHOCOLATE ICE CREAM</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="image-container p-5">
          <div className="d-flex justify-content-center align-items-center flex-column text-light fs-5" data-aos="fade-up">
            <img
              className="img-fluid img-xs img-sm"
              src="/Images/icecream4.png"
              alt="Ice Cream 4"
            />
            <h4 className="pt-2">₹90.00</h4>
            <p>CHOCOLATE MILKSHAKE</p>
          </div>
        </Col>
      </Row>

      {/* Menu Page */}

      <Row className="text-light text-center pt-5" id="menu">
        <h1 className="display-1 fw-bolder py-3" data-aos="fade-up">
          OUR MENU
        </h1>
        <p>____________________</p>
        <h5 className="py-3" data-aos="fade-up">
          Shake up your day with luscious sips, a sweet escape in every glass.
        </h5>
      </Row>

      {/* Menu Page Images First Row */}

      <Row className="text-light py-5 ps-3 text-center w-100">
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column gap-4 py-4"
          data-aos="fade-up"
        >
          <Row>
            <h3>ICE CREAMS</h3>
            <p>________________</p>
          </Row>
          <Row className=" menu_container text-center w-100 text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Ice Cream Imgs/ice-cream1.png"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Cone Ice</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹40</h4>
            </Col>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Ice Cream Imgs/ice-cream2.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Stick Ice</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹30</h4>
            </Col>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Ice Cream Imgs/ice-cream3.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Cone Ice</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹35</h4>
            </Col>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Ice Cream Imgs/ice-cream4.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Cone Ice</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹125</h4>
            </Col>
          </Row>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column gap-4 py-4"
          data-aos="fade-up"
        >
          <Row>
            <h3>SHAKES</h3>
            <p>_____________</p>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Shakes Imgs/shake1.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Straw Berry</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹90</h4>
            </Col>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Shakes Imgs/shake2.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Chocolate</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹75</h4>
            </Col>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Shakes Imgs/shake3.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Oreo Shake</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹60</h4>
            </Col>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Shakes Imgs/shake4.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Boost Shake</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹50</h4>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Menu Page Images Second Row */}

      <Row className="text-light py-2 ps-3 text-center w-100">
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column gap-4 py-4"
          data-aos="fade-up"
        >
          <Row>
            <h3>COLLERS</h3>
            <p>______________</p>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Coolers Imgs/coolers1.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Iced Coffee</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹65</h4>
            </Col>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Coolers Imgs/coolers2.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Coke</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹20</h4>
            </Col>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Coolers Imgs/coolers3.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Lemonade</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹90</h4>
            </Col>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Coolers Imgs/coolers4.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Litchi</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹75</h4>
            </Col>
          </Row>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column gap-4 py-4"
          data-aos="fade-up"
        >
          <Row>
            <h3>GELATO</h3>
            <p>______________</p>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Gelatos Imgs/gelato1.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Chocolate</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹20</h4>
            </Col>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Gelatos Imgs/gelato2.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Cone Gelato</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹20</h4>
            </Col>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Gelatos Imgs/gelato3.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Straw Berry</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹20</h4>
            </Col>
          </Row>
          <Row className=" menu_container text-center w-100">
            <Col>
              <img
                alt="Loading..."
                className="fluid"
                src="/Gelatos Imgs/gelato4.jpg"
              />
            </Col>
            <Col>
              <h4 className="menu_title">Mini Choco</h4>
            </Col>
            <Col>
              <h4 className="menu_title">₹20</h4>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* About Page */}

      <Row className="text-light pt-5" id="about" data-aos="fade-up">
        <h1 className="display-1 fw-bolder py-3 text-center">About</h1>
        <p className="text-center">__________________</p>
        <h4 className="py-3 text-center">Welcome To The Food Truck </h4>
        <h5 className="py-3 text-center">
          We’re here to add a little extra sweetness to your day. The Food Truck
          is a virtual restaurant and new way to order your favorite ice cream
          brands right to your front door.
        </h5>
      </Row>

      {/* Contact Page */}

      <Row className="text-light py-5" data-aos="fade-up">
        <section className="contact" id="contact">
          <div className="container">
            <div className="heading text-center">
              <h1 className="display-1 fw-bolder">Contact</h1>
              <p className="text-center">__________________</p>
              <h4 className="py-3 text-center">
                Thank You For Visiting The Food Truck
              </h4>
              <h5 className="py-3">
                If you would like to contact a consumer advisor, please fill out
                the form below. Our hours are Monday-Sunday 9:00 AM - 10:30 PM
                IST.
              </h5>
              <h5 className="py-3">
                If you are reporting a problem with one of our products, please
                be sure to include your address and a telephone number where you
                can be reached during the day so we can contact you for further
                information.
              </h5>
            </div>
            <div className="row py-5" data-aos="fade-up">
              <div className="col-md-5 py-4 d-flex justify-content-center align-items-center flex-column">
                <div className="title">
                  <h2>Contact Details:</h2>
                </div>
                <div className="content">
                  {/* Info-1 */}
                  <div className="info">
                    <i className="fas fa-mobile-alt"></i>
                    <h4 className="d-inline-block">
                      PHONE :
                      <br />
                      <span>+91 8608643005 , +91 8608640266</span>
                    </h4>
                  </div>
                  {/* Info-2 */}
                  <div className="info">
                    <i className="far fa-envelope"></i>
                    <h4 className="d-inline-block">
                      EMAIL :
                      <br />
                      <span>foodtruck@gmail.com</span>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-md-7 py-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <div className="error-message">{errors.name}</div>
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      <div className="error-message">{errors.lastName}</div>
                    </div>
                    <div className="col-sm-12">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <div className="error-message">{errors.email}</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="5"
                      id="comment"
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <div className="error-message">{errors.message}</div>
                  </div>
                  <button className="btn btn-block" id="button" type="submit">
                    Send Message!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Row>

      {/* Footer Page */}
      <Row>
        <Row data-aos="fade-up">
          <div className="text-center">
            <img
              alt="Loading..."
              className="img-fluid footer_image"
              src="/Images/truck.png"
            />
          </div>
        </Row>
        <Row className="text-light text-center pt-5">
          <h3>IT'S TRUCKING GOOD!</h3>
          <h5 className="py-3">Explore the New Food Wheeler.</h5>
        </Row>
        <Row>
          <div className="text-center text-light fs-1 d-flex justify-content-center gap-3">
            <FaFacebookSquare />
            <FaTwitter />
            <FaInstagramSquare />
          </div>
        </Row>
        <Row className="text-center text-light pt-4">
          <p>Copyright 2023 Food Truck | Powered by Food Truck</p>
        </Row>
      </Row>
    </Container>
  );
};

export default Home;
