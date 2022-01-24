import styles from "./BlogSection.module.css";
import SectionHeading from "../sectionHeading/sectionHeading";
import Button from "../button/Button";

const BlogSection = () => {
  return (
    <section id="blog" className={styles.blog}>
      <SectionHeading span={"our"} text={"blogs"} />
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <img src="images/blog-1.jpeg" alt="blog-post-1" />
          <div className={styles.content}>
            <a href="#" className={styles.title}>
              tasty and refreshing coffee
            </a>
            <span> by admin / 21st may, 2021</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non convallis ante, eget ornare elit. In
            </p>
            <Button href={"#"} text={"read more"} />
          </div>
        </div>
        <div className={styles.box}>
          <img src="images/blog-2.jpeg" alt="blog-post-1" />
          <div className={styles.content}>
            <a href="#" className={styles.title}>
              tasty and refreshing coffee
            </a>
            <span> by admin / 21st may, 2021</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non convallis ante, eget ornare elit. In
            </p>
            <Button href={"#"} text={"read more"} />
          </div>
        </div>
        <div className={styles.box}>
          <img src="images/blog-3.jpeg" alt="blog-post-1" />
          <div className={styles.content}>
            <a href="#" className={styles.title}>
              tasty and refreshing coffee
            </a>
            <span> by admin / 21st may, 2021</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non convallis ante, eget ornare elit. In
            </p>
            <Button href={"#"} text={"read more"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
