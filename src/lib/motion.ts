import type { Variants, Transition } from "framer-motion";

export const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

// import type { Variants, Transition } from "framer-motion";

// export const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

// export const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 16 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: EASE_OUT },
//   },
// };

// export const stagger: Variants = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.08, delayChildren: 0.06 },
//   },
// };

