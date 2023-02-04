import React from "react";
import styles from "../style";

const Subjects = () => {
  return (
    <section
      id="subjects"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[500px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subjects;
