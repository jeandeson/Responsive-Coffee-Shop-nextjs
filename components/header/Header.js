import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.css";
import Button from "../button/Button";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const handleToggleNav = () => {
    setCartActive(false);
    setSearchActive(false);
    setNavActive(!navActive);
  };

  const handleToggleCart = () => {
    setNavActive(false);
    setSearchActive(false);
    setCartActive(!cartActive);
  };

  const handleToggleSearch = () => {
    setNavActive(false);
    setCartActive(false);
    setSearchActive(!searchActive);
  };
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <Image src={"/images/logo.png"} width="74" height="63" alt="logo"></Image>
      </a>

      <nav className={`${styles.navbar} ${navActive && styles.navActive}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#products">Products</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <a href="#blogs">Contact</a>
      </nav>

      <div className={styles.icons}>
        <div onClick={handleToggleSearch} className="fas fa-search" id="search-btn"></div>
        <div onClick={handleToggleCart} className="fas fa-shopping-cart" id="cart-btn"></div>
        <div onClick={handleToggleNav} className="fas fa-bars" id="menu-btn"></div>
      </div>

      <div className={`${styles.searchForm} ${searchActive && styles.searchActive}`}>
        <input name="search" type="search" id="search" placeholder="search here..." />
        <label htmlFor="search" className={`fa fa-search`}></label>
      </div>

      <div className={`${styles.cartItemsContainer} ${cartActive && styles.cartActive}`}>
        <div className={styles.cartItem}>
          <span className={`fas fa-times ${styles.closeBtn}`}></span>
          <Image src={"/images/cart-item-1.png"} width="74" height="63" alt="logo"></Image>
          <div className={styles.cartContent}>
            <h3>cart item 01</h3>
            <div className={styles.price}>$15.99</div>
          </div>
        </div>
        <div className={styles.cartItem}>
          <span className={`fas fa-times ${styles.closeBtn}`}></span>
          <Image src={"/images/cart-item-2.png"} width="74" height="63" alt="logo"></Image>
          <div className={styles.cartContent}>
            <h3>cart item 02</h3>
            <div className={styles.price}>$15.99</div>
          </div>
        </div>
        <div className={styles.cartItem}>
          <span className={`fas fa-times ${styles.closeBtn}`}></span>
          <Image src={"/images/cart-item-3.png"} width="74" height="63" alt="logo"></Image>
          <div className={styles.cartContent}>
            <h3>cart item 03</h3>
            <div className={styles.price}>$15.99</div>
          </div>
        </div>
        <Button full={true} href={"#"} text={"checkout now"} />
      </div>
    </header>
  );
};

export default Header;
