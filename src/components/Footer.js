const Footer = () => {
  return (
    <div className="footer">
      <h2>SVR United</h2>
      <div className="footerRow">
        <div className="footerColumn">
          <h3>A GREAT PLACE TO WORK</h3>
          <div className="footerImages">
            <img src="https://via.placeholder.com/50" alt="" />
            <img src="https://via.placeholder.com/50" alt="" />
            <img src="https://via.placeholder.com/50" alt="" />
            <img src="https://via.placeholder.com/50" alt="" />
          </div>
        </div>
        <div className="footerColumn">
          <h3>CONNECT WITH US</h3>
          <ul>
            <li>Linkedin</li>
            <li>WeChat</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h3>CONTACT US</h3>
          <ul>
            <li>London</li>
            <li>New York</li>
            <li>Los Angeles</li>
            <li>Shanghai</li>
            <li>Beijing</li>
            <li>Hong Kong</li>
            <li>Mumbai</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h3>LOGINS</h3>
          <ul>
            <li>Client Projects</li>
            <li>Specialist Portal</li>
            <li>Forum Portal</li>
          </ul>

          <h3>GAIN ACCESS</h3>
          <button className="trialButton">REEQUEST A TRIAL</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
