import { creations } from "../utils/data";
import { motion } from "framer-motion";

const fadeInVariants = {
  initial: {
    opacity: 1,
    x: -150,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.05 * index,
    },
  }),
};

export default function Creations({ matches, lg }) {
  return (
    <section className="creations" id="creations">
      <div className="container">
        <div className="creations-layout">
          <div className="creations-header">
            <h2>OUR CREATIONS</h2>
            {lg && (
              <motion.div
                className="see"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <p>SEE ALL</p>
              </motion.div>
            )}
          </div>
          <div className="creations-grid">
            {creations.map((creation, index) => (
              <motion.div
                variants={fadeInVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true }}
                className="creation"
                style={{
                  backgroundImage: `url(${
                    matches ? creation.desktop : creation.mobile
                  })`,
                }}
                key={creation.lower}
              >
                <h3 className="creation-title">
                  {creation.name.toUpperCase()} <br />{" "}
                  {creation.lower.toUpperCase()}
                </h3>
              </motion.div>
            ))}
          </div>
          {!lg && (
            <motion.div
              className="see"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p>SEE ALL</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
