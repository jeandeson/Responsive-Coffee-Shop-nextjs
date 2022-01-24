import Button from "../button/Button";
import SectionHeading from "../sectionHeading/sectionHeading";
import styles from "./AboutSection.module.css";
const AboutSection = () => {
  return (
    <section id="about" className={styles.about}>
      <SectionHeading span={"about"} text={"us"} />
      <div className={styles.row}>
        <div className={styles.image}>
          <img src="images/about-img.jpeg" alt="about"></img>
        </div>

        <div className={styles.content}>
          <h3>what makes our coffee special?</h3>
          <p>
            lorem ipsum, dolor sit amet consectetur adispiting elit. Placet laboret, sint cupicated distinctio tempora
            reincinding.
          </p>
          <p>
            lorem ipsum, dolor sit amet consectetur adispiting elit. Placet laboret, sint cupicated distinctio tempora
            reincinding.
          </p>
          <Button href={"#"} text={"learn more"} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
