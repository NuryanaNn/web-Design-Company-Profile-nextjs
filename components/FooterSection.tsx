import React from "react";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <div className="logo mb-4">
            <img src="logo.png" alt="Company Logo" />
          </div>
          <p className="mb-4">
            At design we are passionate about providing business with the IT
            solution they need to succeed in today's competitive marketplace
          </p>
          <h4 className="mb-4">Follow Us</h4>
          <ul className="flex space-x-4">
            <li>
              <a href="">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="">Web Design</a>
            </li>
            <li>
              <a href="">App Development</a>
            </li>
            <li>
              <a href="">Cloud Services</a>
            </li>
            <li>
              <a href="">Domain And Hosting</a>
            </li>
            <li>
              <a href="">SEO Optimization</a>
            </li>
            <li>
              <a href="">Social Media</a>
            </li>
            <li>
              <a href="">Data Secure</a>
            </li>
            <li>
              <a href="">Web Hosting</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4">Information</h3>
          <ul className="space-y-2">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Single Blog</a>
            </li>
            <li>
              <a href="">Terms And Conditions</a>
            </li>
            <li>
              <a href="">Sample Pages</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4">Contacts</h3>
          <ul className="space-y-2">
            <li>
              <a href="">webdesign@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
