import { motion, useScroll, useTransform } from "framer-motion";

export default function PaydaySection() {
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], [0, 750]);

  return (
    <section
      className="relative w-full min-h-[600px] rounded-3xl p-10 flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 border-2 border-gray-200 relative">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-left">
          Payday your way
        </h2>

        <p className="body-1">
          Decide how you want to earn, set your own terms and get paid directly.
          All from one place, at your own pace.
        </p>

        <a
          href="#"
          className="bg-black text-white px-8 py-4 rounded-full font-semibold inline-block mb-12"
        >
          Learn how Tipd works
        </a>

        <div className="relative flex items-center justify-between px-10 mt-10">
          <motion.img
            src="/money.svg"
            className="absolute left-[15%]"
            style={{ x }}
          />
          <img src="/man1.png" width={180} className="relative z-20" />

          <img src="/man2.png" width={180} className="relative z-20" />
        </div>
      </div>
    </section>
  );
}
