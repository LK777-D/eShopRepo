import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Products</h3>
          <ul>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home & Garden</li>
            <li>Fashion</li>
            <li>Motors</li>
            {/* Add more product links */}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Global Shop Store. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
