import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../animation";

export default function Index({ data, isActive, setSelectedIndicator, setIsActive }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <a 
        href={href}
        onClick={(e) => {
          e.preventDefault();
          if (setIsActive) setIsActive(false);
          // @ts-ignore
          window.lenis ? window.lenis.scrollTo(href) : document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {title}
      </a>
    </motion.div>
  );
}
