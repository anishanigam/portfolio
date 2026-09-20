import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:heyayushk@gmail.com" data-cursor="disable">
                heyayushk@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Bachelor Of Technology</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/ayushkumar71/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/05ayush_"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1sTQ5gxW3A-cl77jlGOdrru-DMCBawY70"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Drive Portfolio <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            {/* <h2>
              Designed and Developed <br /> by <span>Ayush Kumar</span>
            </h2> */}
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
