import styles from "./FooterSection.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.share}>
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
        <a href="#" className="fab fa-pinterest"></a>
      </div>

      <div className={styles.links}>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#products">products</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
      </div>

      <div className={styles.credit}>
        <span>Jeandeson Nascimento</span> | all rights reserved
      </div>
    </section>
  );
};

export default Footer;
