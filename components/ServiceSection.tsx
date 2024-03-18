import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faVolumeUp,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const ServiceSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-semibold text-green-400">Our Service</h3>
        <p className="text-gray-600 mt-5 mb-10">
          Our Service are a testament to the satisfaction of our clients
        </p>
      </div>
      <div className="flex flex-wrap justify-around items-stretch">
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mb-8 p-8 m-4 w-full sm:w-auto">
          <div className="text-center">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-3xl text-blue-500 mb-4"
            />
            <h2 className="font-bold text-xl mb-2">Web Design</h2>
            <p className="text-gray-700 text-base">
              We create stunning and responsive websites that will impress your
              audience.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mb-8 p-8 m-4 w-full sm:w-auto">
          <div className="text-center">
            <FontAwesomeIcon
              icon={faVolumeUp}
              className="text-3xl text-green-500 mb-4"
            />
            <h2 className="font-bold text-xl mb-2">App Development</h2>
            <p className="text-gray-700 text-base">
              We develop custom applications tailored to your specific needs and
              requirements.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mb-8 p-8 m-4 w-full sm:w-auto">
          <div className="text-center">
            <FontAwesomeIcon
              icon={faLock}
              className="text-3xl text-purple-500 mb-4"
            />
            <h2 className="font-bold text-xl mb-2">Software Solutions</h2>
            <p className="text-gray-700 text-base">
              We offer innovative software solutions to streamline your business
              processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
