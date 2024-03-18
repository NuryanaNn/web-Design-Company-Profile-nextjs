import React from "react";

const Team: React.FC = () => {
  return (
    <section className="team text-center pt-20 pl-20 pr-20">
      <div className="teamTitle">
        <h3 className="text-3xl font-semibold text-green-400">Expert Team</h3>
        <p className="mt-5 mb-10">
          Our team of experienced professionals is committed to understanding
          your unique business needs
        </p>
      </div>

      <div className="teamContent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="images">
            <img src="team-1.jpg" alt="" />
          </div>
          <div className="cardText">
            <h3>John Doe</h3>
            <p>Project Manager</p>
          </div>
          <div className="sci">
            <ul className="flex items-center space-x-2">
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="images">
            <img src="team-2.jpg" alt="" />
          </div>
          <div className="cardText">
            <h3>Jane Smith</h3>
            <p>Marketing Specialist</p>
          </div>
          <div className="sci">
            <ul className="flex items-center space-x-2">
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="images">
            <img src="team-3.jpg" alt="" />
          </div>
          <div className="cardText">
            <h3>David Brown</h3>
            <p>Software Engineer</p>
          </div>
          <div className="sci">
            <ul className="flex items-center space-x-2">
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="images">
            <img src="team-4.jpg" alt="" />
          </div>
          <div className="cardText">
            <h3>Sarah Johnson</h3>
            <p>UX/UI Designer</p>
          </div>
          <div className="sci">
            <ul className="flex items-center space-x-2">
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
