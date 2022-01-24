import Button from "../button/Button";
import SectionHeading from "../sectionHeading/sectionHeading";
import styles from "./MenuSection.module.css";

const MenuSection = () => {
  return (
    <section id="menu" className={styles.menu}>
      <SectionHeading span={"our"} text={"menu"} />
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <img src="images/menu-1.png" alt="coffe-1" />
          <h3>tasty and healty</h3>
          <div className={styles.price}>
            $15.99 <span>20.99</span>
          </div>

          <Button href={"#"} text="add to cart" />
        </div>

        <div className={styles.box}>
          <img src="images/menu-2.png" alt="coffe-1" />
          <h3>tasty and healty</h3>
          <div className={styles.price}>
            $15.99 <span>20.99</span>
          </div>

          <Button href={"#"} text="add to cart" />
        </div>

        <div className={styles.box}>
          <img src="images/menu-3.png" alt="coffe-1" />
          <h3>tasty and healty</h3>
          <div className={styles.price}>
            $15.99 <span>20.99</span>
          </div>

          <Button href={"#"} text="add to cart" />
        </div>
        <div className={styles.box}>
          <img src="images/menu-4.png" alt="coffe-1" />
          <h3>tasty and healty</h3>
          <div className={styles.price}>
            $15.99 <span>20.99</span>
          </div>

          <Button href={"#"} text="add to cart" />
        </div>
        <div className={styles.box}>
          <img src="images/menu-5.png" alt="coffe-1" />
          <h3>tasty and healty</h3>
          <div className={styles.price}>
            $15.99 <span>20.99</span>
          </div>

          <Button href={"#"} text="add to cart" />
        </div>
        <div className={styles.box}>
          <img src="images/menu-6.png" alt="coffe-1" />
          <h3>tasty and healty</h3>
          <div className={styles.price}>
            $15.99 <span>20.99</span>
          </div>

          <Button href={"#"} text="add to cart" />
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
