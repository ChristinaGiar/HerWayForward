import React from "react";
import styles from "./Newsletter.module.scss";
// import formDomain from "../../../../../formDomain.json";

const Newsletter = () => {
  const FORM_ENDPOINT = "#"; // formDomain;
  return (
    <div className={styles.newsletter}>
      <h4 className={styles.newsletter__title}>
        Would you like to hear more from us?
      </h4>
      <p className={styles.newsletter__description}>
        Sign up to our Newsletter.
      </p>
      <form
        className={styles.newsletter__form}
        action={FORM_ENDPOINT}
        method="POST"
      >
        <input type="text" placeholder="Enter your name" name="name" />
        <input type="email" placeholder="Enter your email" name="email" />
        <button type="submit" className={styles.newsletter__button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
