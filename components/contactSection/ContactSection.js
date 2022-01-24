import styles from "./ContactSection.module.css";
import SectionHeading from "../sectionHeading/sectionHeading";

const ReviewSection = () => {
  return (
    <section id="contact" className={styles.contact}>
      <SectionHeading span={"contact"} text={"us"} />

      <div className={styles.row}>
        <iframe
          className={styles.gmap}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0225806503804!2d72.85511231485101!3d19.062744787095514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e0d4953917%3A0x73982067d0000000!2sCoffee%20Shop!5e0!3m2!1spt-BR!2sbr!4v1642999969062!5m2!1spt-BR!2sbr"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <form className={styles.form}>
          <h3>get in touch</h3>
          <div className={styles.inputBox}>
            <span className="fas fa-user"></span>
            <input type="text" placeholder="name" />
          </div>
          <div className={styles.inputBox}>
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="email" />
          </div>
          <div className={styles.inputBox}>
            <span className="fas fa-phone"></span>
            <input type="number" placeholder="number" />
          </div>

          <input type="submit" value="contact now" />
        </form>
      </div>
      {/* <div className={styles.boxContainer}>
        <div className={styles.box}></div>
      </div> */}
    </section>
  );
};

export default ReviewSection;
