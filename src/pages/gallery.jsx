import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const imageFilenames = [
"Event - 1 (1).097be196.webp",
"Event - 1 (4).a04c35cf.webp",
"Event 2 - (1).fb2485f7.webp",
"Event 5 - (3).57777534.webp",
"Execom.webp",
"IMG_0382.webp",
"IMG_4415.webp",
"IMG_4417.webp",
"IMG_4422.webp",
"IMG_4429.webp",
"IMG_4430.webp",
"IMG_4432.webp",
"IMG_4434.webp",
"IMG_4441.webp",
"IMG_4445.webp",
"IMG_4449.webp",
"IMG_4456.webp",
"IMG_4460.webp",
"IMG_4466.webp",
"IMG_4467.webp",
"IMG_4472.webp",
"IMG_4489.webp",
"IMG_4491.webp",
"IMG_4493.webp",
"IMG_4494.webp",
"IMG_4798.webp",
"IMG_7192.1796b5ff.webp",
"P1260893.83e300cf.webp"
];

  // Shuffle images on each load
  const shuffledImages = useMemo(() => {
    const shuffled = [...imageFilenames];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  return (
    <section id="gallery" className="bg-black text-white py-20 px-5 min-h-screen">
      <div className="text-center mb-12 mt-8">
        <h2 className="text-5xl font-bold uppercase bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg">
          Gallery
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-500 mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {shuffledImages.map((filename, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-xl bg-gray-900"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.08 }}
          >
            <img
              src={`/images/${filename}`}
              alt={`Gallery ${index + 1}`}
              className="w-full h-70  object-cover rounded-2xl"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;


