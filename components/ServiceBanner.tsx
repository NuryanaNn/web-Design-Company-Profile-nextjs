import styles from "../styles/ServicesBanner.module.css";

const SmallBanner = () => {
  return (
    <div
      className={`${styles["ServicesBanner-section"]} ${styles["hero-background"]}`}
    >
      <div className={styles["hero-overlay"]}>
        {/* H1 Responsive */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Our Services
        </h1>
        {/* P Responsive */}
        <p className="mt-4 text-md md:text-lg lg:text-2xl text-white">
          Web Design, Developemnt, Hosting
        </p>
      </div>
    </div>
  );
};

export default SmallBanner;
