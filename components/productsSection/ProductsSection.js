import styles from "./ProductsSection.module.css";
import SectionHeading from "../sectionHeading/sectionHeading";
const ProductsSection = () => {
  return (
    <section id="products" className={styles.products}>
      <SectionHeading span={"our"} text={"produtcs"} />

      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <div className={styles.icons}>
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className={styles.image}>
            <img src="images/product-1.png" alt="product-1"></img>
          </div>
          <div className={styles.content}>
            <h3>fresh coffee</h3>
            <div className="stars">
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars-half-alt"></i>
            </div>
            <div className={styles.price}>
              15.99 <span>20.99</span>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.icons}>
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className={styles.image}>
            <img src="images/product-2.png" alt="product-1"></img>
          </div>
          <div className={styles.content}>
            <h3>fresh coffee</h3>
            <div className="stars">
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars-half-alt"></i>
            </div>
            <div className={styles.price}>
              15.99 <span>20.99</span>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.icons}>
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className={styles.image}>
            <img src="images/product-3.png" alt="product-1"></img>
          </div>
          <div className={styles.content}>
            <h3>fresh coffee</h3>
            <div className="stars">
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars"></i>
              <i className="fas fa-stars-half-alt"></i>
            </div>
            <div className={styles.price}>
              15.99 <span>20.99</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
