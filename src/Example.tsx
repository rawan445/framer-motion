import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Example = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["-150%", "50%"]);

    return (
        <div ref={ref} className="w-full h-screen overflow-hidden relative flex justify-center items-center" >
            <motion.h1
                style={{ y: textY }}
                className="font-bold text-white text-7xl md:text-9xl relative z-10"
            >
                Rawan
            </motion.h1>
            <motion.div
                style={{
                    y: backgroundY,
                }}
                className=" inset-0 z-0 background-full" />
            <motion.div className=" inset-0 z-20 background-bottom" />
        </div>
    );
};

export default Example;
