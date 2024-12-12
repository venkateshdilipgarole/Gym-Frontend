import React from 'react';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📞 +91 9845242761</p>
          <p>📧 venkateshgarole22@gmail.com</p>
        </div>

        

        <div className="footer-section">
          <h3>Credits</h3>
          <p>Designed and Developed By <strong><b>Venkatesh Dilip Garole</b></strong></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
