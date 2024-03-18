import styles from "../styles/AboutBanner.module.css";

const SmallBanner = () => {
  return (
    <div
      className={`${styles["smallBanner-section"]} ${styles["hero-background"]}`}
    >
      <div className={styles["hero-overlay"]}>
        {/* H1 Responsive */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          About Us
        </h1>
        {/* P Responsive */}
        <p className="mt-4 text-md md:text-lg lg:text-2xl text-white">
          Were Passionate About Helping Businesses Thrive with Technology
        </p>
      </div>
    </div>
  );
};

export default SmallBanner;
