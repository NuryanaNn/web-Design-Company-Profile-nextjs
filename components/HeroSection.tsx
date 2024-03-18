import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={`${styles["hero-section"]} ${styles["hero-background"]}`}>
      <div className={styles["hero-overlay"]}>
        {/* H1 Responsive */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-400">
          Web Design Studio
        </h1>
        {/* P Responsive */}
        <p className="mt-4 text-md md:text-lg lg:text-2xl text-gray-600 font-bold">
          Design Outstanding Websites, Applications, And Software Solutions
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
