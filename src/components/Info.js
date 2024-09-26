import React from "react";
import mypic from "../images/shreepal.jpg";
import logo from "../images/Surprise_car_acc_Logo.png";
import "./Info.css";

// Import Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelopeOpenText,
  faGlobe,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <div className="logo-div animate__animated animate__fadeInDown">
        <img src={logo} className="logo" alt="company logo" />
      </div>
      <div className="profile animate__animated animate__fadeInUp">
        <img className="DP" src={mypic} alt="profile" />
      </div>
      <h2 className="name animate__animated animate__fadeInUp">
        Shreepal Oswal
      </h2>
      <p className="dev animate__animated animate__fadeInUp">Founder</p>

      <div className="description">
        <h2>Description</h2>
        <p>Thank you for reaching out to us! We're excited to assist you with your inquiry. Below are our contact details and social media handles for further communication and updates.</p>
      </div>

      <div className="contact-details">
        <p className="phone animate__animated animate__zoomIn">
          <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
          <a href="tel:9370665551">+91 9370665551</a>
        </p>

        <p className="email animate__animated animate__zoomIn">
          <FontAwesomeIcon icon={faEnvelopeOpenText} className="contact-icon" />
          <a href="mailto:surprisecar2020@gmail.com">surprisecar2020@gmail.com</a>
        </p>

        <p className="company-site animate__animated animate__zoomIn">
          <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
          <a
            href="https://surprisecar.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.surprisecar.in
          </a>
        </p>

        <p className="address animate__animated animate__zoomIn">
          <FontAwesomeIcon icon={faMapMarkedAlt} className="contact-icon" />
          <a
            href="https://maps.app.goo.gl/2PGPMWvipeYK12vh6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kasarwadi Sagar Plaza Building,
            <br />
            PCMC, Pune, India, 411034
          </a>
        </p>
      </div>

      <div className="tags animate__animated animate__fadeInUp">
        <a
          href="https://www.facebook.com/surprisecaraccessories"
          className="fa fa-facebook"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={["fab", "facebook"]} />
          <span className="sr-only">Facebook</span> {/* Visually hidden text */}
        </a>
        <a
          href="https://www.instagram.com/surprise_caraccessories_pune/"
          className="fa fa-instagram"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          <span className="sr-only">Instagram</span>{" "}
          {/* Visually hidden text */}
        </a>
        <a
          href="https://www.youtube.com/@MR.SHRIPAL_OSWAL"
          className="fa fa-youtube"
          aria-label="YouTube"
        >
          <FontAwesomeIcon icon={["fab", "youtube"]} />
          <span className="sr-only">YouTube</span> {/* Visually hidden text */}
        </a>
      </div>
    </div>
  );
}
