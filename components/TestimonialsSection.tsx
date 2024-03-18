import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold text-green-400">
            Testimonials
          </h3>
          <p className="text-gray-600 mt-5 mb-10">
            Our Testimonials are a testament to the satisfaction of our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <img
                  src="testimonial-1.jpg"
                  alt="Testimonial 1"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Fizzi Brandon</h3>
                <p className="text-gray-600">CEO</p>
              </div>
            </div>
            <div className="mb-4">
              <ul className="flex testimonial-1">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                {/* Tambahkan kelas unik di sini jika perlu */}
              </ul>
            </div>
            <p className="text-gray-700 testimonial-1-text">
              {/* Tambahkan kelas unik untuk teks testimoni */}
              Thank you for the outstanding service! Our company has seen tremendous growth since partnering with your team. We highly recommend your services to anyone looking to boost their business.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <img
                  src="testimonial-2.jpg"
                  alt="Testimonial 2"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Keena Lara</h3>
                <p className="text-gray-600">CEO</p>
              </div>
            </div>
            <div className="mb-4">
            <ul className="flex testimonial-1">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                {/* Tambahkan kelas unik di sini jika perlu */}
              </ul>
            </div>
            <p className="text-gray-700 testimonial-2-text">
              {/* Tambahkan kelas unik untuk teks testimoni */}
              Working with your team has been a game-changer for us. The level of professionalism and expertise is unmatched. We're extremely satisfied with the results we've achieved together.
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <img
                  src="testimonial-3.jpg"
                  alt="Testimonial 3"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Afa</h3>
                <p className="text-gray-600">CEO</p>
              </div>
            </div>
            <div className="mb-4">
            <ul className="flex testimonial-1">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-1xl text-blue-500 mb-4"
                />
                {/* Tambahkan kelas unik di sini jika perlu */}
              </ul>
            </div>
            <p className="text-gray-700 testimonial-3-text">
              {/* Tambahkan kelas unik untuk teks testimoni */}
              We couldn't be happier with the results we've seen. Your team's dedication and attention to detail have truly exceeded our expectations. Thank you for helping us achieve our goals!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
