import React from "react";
import PropTypes from 'prop-types';
import styles from "./Post.module.scss";

const Post = ({ title, body }) => {
  return (
    <div className={styles.post}>
      <h3 className={styles.post__title}>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;
