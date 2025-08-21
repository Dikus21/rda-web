"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center p-6">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="text-9xl font-extrabold text-primary"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl mt-4 text-subtitle font-semibold"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={goBack}
        className="mt-6 px-6 py-2 bg-primary text-indigo-600 rounded-full font-semibold hover:bg-indigo-300 transition-colors shadow-md"
      >
        🔙 Go Home
      </motion.button>

      <motion.div
        animate={{ rotate: [0, 10, -10, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="text-4xl mt-10"
      >
        🧭
      </motion.div>
    </div>
  );
}
