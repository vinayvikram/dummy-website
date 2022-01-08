const ContactUs = () => {
  return (
    <div className="contactPage">
      <div className="contactPageContent">
        CONTACT US
        <h1>
          Stll have questions? <br /> Get in touch.
        </h1>
        <p>
          For more information about our <br /> products and services, please{" "}
          <br />
          contact us.
        </p>
      </div>
      <div className="contactPageColumn">
        <div>
          <button>Become a Client</button>
          <button>Specialist Enquiries</button>
        </div>
        <div>
          <button>Join Us</button>
          <button>Legal and Compliance Enquiries</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
