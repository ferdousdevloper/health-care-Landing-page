import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../public/logo light.png"

const Footer = () => {
  return (
    <div className="">
      <footer className="footer bg-[#020043]  text-white p-28">
        <aside>
          <img src={logo} alt="" className="mb-8" />
          <p>
          123 Main Street Anytown, USA <br />Postal Code: 12345
          </p>
          <p>
          Support: support@oyolloo.com <br />
          (Available : 10:00am to 07:00pm)
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Name</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Success Page</a>
          <a className="link link-hover">Terms and condition</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Scheduling</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Patient Portal</a>
        </nav>
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <div className="flex gap-8 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
          </div>
          <h1 className="mt-10">@docplus 2024</h1>
          
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
