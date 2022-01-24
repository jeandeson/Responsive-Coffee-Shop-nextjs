import React from "react";
import styles from "./SectionHeading.module.css";

const SectionHeading = ({ span, text }) => {
  return (
    <h1 className={styles.heading}>
      <span>{span}</span> {text}
    </h1>
  );
};

export default SectionHeading;
