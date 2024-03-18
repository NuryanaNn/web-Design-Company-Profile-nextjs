const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-700">
            We are a passionate team of web designers dedicated to creating
            stunning and functional websites for our clients. Our mission is to
            empower businesses of all sizes with beautifully crafted websites
            that help them achieve their goals and stand out in the digital
            world.
          </p>
        </div>
        <div>
          <img src="/skills.jpg" alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
