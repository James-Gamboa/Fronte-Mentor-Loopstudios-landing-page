import { ad } from "../utils/data";
import { motion } from "framer-motion";
import { splitString } from "../utils/data";

const picVariants = {
  initial: {
    opacity: 1,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const infoVariants = {
  initial: {
    opacity: 1,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
};

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const heading = "THE LEADER IN INTERACTIVE VR";
const text =
  "Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.";

export default function AdSection({ matches }) {
  const headingChars = splitString(heading);
  const textChars = splitString(text);
  return (
    <section className="ad-section">
      <div className="container">
        <motion.div
          className="pic"
          variants={picVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <img src={`${matches ? ad.desktop : ad.mobile}`} alt="" />
        </motion.div>
        <motion.div
          className="info"
          id="about"
          variants={infoVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
            viewport={{ once: true }}
          >
            {headingChars.map((char, index) => (
              <motion.span
                key={index}
                variants={charVariants}
                transition={{ duration: 0.5 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
            viewport={{ once: true }}
          >
            {textChars.map((char, index) => (
              <motion.span
                key={index}
                variants={charVariants}
                transition={{ duration: 0.35 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
