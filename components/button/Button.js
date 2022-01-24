import styles from "./Button.module.css";

const Button = ({ text, href, full = false }) => {
  return (
    <a href={href} className={`${styles.btn} ${full && styles.full}`}>
      {text}
    </a>
  );
};

export default Button;
