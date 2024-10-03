import { hero } from "../utils/data";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 1,
    height: "100%",
  },
  animate: (index) => ({
    opacity: 0,
    height: "0",
    transition: {
      duration: 0.3,
      delay: 0.2 * index,
    },
  }),
};
const titleVariants = {
  initial: {
    opacity: 0,
    y: 110,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Home({ matches }) {
  return (
    <section
      className="home"
      style={{
        backgroundImage: `url(${matches ? hero.desktop : hero.mobile})`,
      }}
      id="home"
    >
      <div className="container">
        <div className="banner">
          {[1, 2, 3].map((digit, index) => (
            <motion.div
              className="overlay"
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              key={digit}
            ></motion.div>
          ))}

          <motion.h1
            className="main-title"
            variants={titleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            IMMERSIVE <br /> EXPERIENCES <br />
            THAT DELIVER
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
