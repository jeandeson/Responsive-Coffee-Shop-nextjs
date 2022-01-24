import styles from "./ReviewSection.module.css";
import SectionHeading from "../sectionHeading/sectionHeading";
import Stars from "../stars/stars";

const ReviewSection = () => {
  return (
    <section id="review" className={styles.review}>
      <SectionHeading span={"customers's"} text={"review"} />

      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <img src="images/quote-img.png" className={styles.quote} alt="user-quote" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non convallis ante, eget ornare elit. In sed
            erat eget mauris sodales lacinia eget ac quam. Maecenas at luctus mauris. Sed fermentum eleifend nibh eu
          </p>
          <img src="images/pic-1.png" className={styles.user} alt="user" />
          <h3>Jhon Doe</h3>
          <Stars />
        </div>
        <div className={styles.box}>
          <img src="images/quote-img.png" className={styles.quote} alt="user-quote" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non convallis ante, eget ornare elit. In sed
            erat eget mauris sodales lacinia eget ac quam. Maecenas at luctus mauris. Sed fermentum eleifend nibh eu
          </p>
          <img src="images/pic-2.png" className={styles.user} alt="user" />
          <h3>Jhon Doe</h3>
          <Stars />
        </div>
        <div className={styles.box}>
          <img src="images/quote-img.png" className={styles.quote} alt="user-quote" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non convallis ante, eget ornare elit. In sed
            erat eget mauris sodales lacinia eget ac quam. Maecenas at luctus mauris. Sed fermentum eleifend nibh eu
          </p>
          <img src="images/pic-3.png" className={styles.user} alt="user" />
          <h3>Jhon Doe</h3>
          <Stars />
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
