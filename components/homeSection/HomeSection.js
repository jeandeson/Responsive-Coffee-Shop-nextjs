import styles from "./HomeSection.module.css";
import Button from "../button/Button";
const HomeSection = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.content}>
        <h3>fresh coffe in the morning</h3>
        <p>
          lorem ipsum, dolor sit amet consectetur adispiting elit. Placet laboret, sint cupicated distinctio tempora
          reincinding.
        </p>
        <Button href={"#"} text={"get yours now"} />
      </div>
    </section>
  );
};

export default HomeSection;
