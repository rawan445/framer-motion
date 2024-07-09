import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const Example2 = () => {
  return (
    <section className="grid place-content-center gap-2 bg-green-300 px-8 py-24 text-black">
      <motion.a
        initial="initial"
        whileHover="hovered"
        href="#"
        className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
        style={{
          lineHeight: 0.75,
        }}
      >
        <div>
          {"Rawan".split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {"Rawan".split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.a>
    </section>
  );
};

export default Example2;
