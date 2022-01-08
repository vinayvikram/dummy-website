const TopBar = () => {
  return (
    <div className="top">
      <div className="loginSelect">
        &#128274; LOGIN &#8964;
        <ul>
          <li> CLIENT PROJECTS</li>
          <li> SPECIALIST PORTAL</li>
          <li> FORUM PORTAL</li>
        </ul>
      </div>
      <div className="countrySelect">
        India &#8964;
        <ul>
          <li>India</li>
          <li>USA</li>
        </ul>
      </div>
      <button className="trialButton">REQUEST A TRIAL</button>
    </div>
  );
};

export default TopBar;
