import styles from "../styles/TeamBanner.module.css";

const TeamBanner = () => {
  return (
    <div
      className={`${styles["TeamBanner-section"]} ${styles["hero-background"]}`}
    >
      <div className={styles["hero-overlay"]}>
        {/* H1 Responsive */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Our Team
        </h1>
        {/* P Responsive */}
        <p className="mt-4 text-md md:text-lg lg:text-2xl text-white">
          Our team of experienced professionals is committed to understanding
          your unique business needs
        </p>
      </div>
    </div>
  );
};

export default TeamBanner;
