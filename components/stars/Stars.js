import styles from "./Stars.module.css";
const Stars = () => {
  return (
    <div className={styles.stars}>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i class="fas fa-star-half"></i>
    </div>
  );
};

export default Stars;
