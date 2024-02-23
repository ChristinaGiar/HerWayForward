import React from "react";
import PropTypes from 'prop-types';
import styles from "./Banner.module.scss";

const Banner = ({ title, image }) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.banner__title}>{title}</h1>
      <img className={styles.banner__image} src={image}></img>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Banner;
