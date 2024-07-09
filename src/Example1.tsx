import { motion } from "framer-motion";
const text = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
earum nobis quasi repellat. Amet facere nulla dolorum accusantium sit
dolores odio excepturi facilis laboriosam officiis dolorem, nobis
reprehenderit molestiae.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
earum nobis quasi repellat. Amet facere nulla dolorum accusantium sit
dolores odio excepturi facilis laboriosam officiis dolorem, nobis
reprehenderit molestiae.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
earum nobis quasi repellat. Amet facere nulla dolorum accusantium sit
dolores odio excepturi facilis laboriosam officiis dolorem, nobis
reprehenderit molestiae.`;
const words = text.split(' ');

const Example1 = () => {
    return (
        <div className="w-full">
        <div className="max-w-lg space-y-4 mx-auto py-24 text-neutral-300">
          {words.map((word, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              style={{ display: 'inline-block', marginRight: '4px' }}
            >
              {word}{' '}
            </motion.div>

          ))}
        </div>
      </div>
    );
};



export default Example1;
