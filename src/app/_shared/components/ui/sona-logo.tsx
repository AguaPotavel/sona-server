import * as React from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useTime,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

import { cn } from "@/app/_shared/lib/utils";

const sonaTextVariant = {
  initial: {
    opacity: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
      type: "spring",
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const sonatTextVariantItem = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};

const appTextVariant = {
  initial: {
    opacity: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
      type: "spring",
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const appTextVariantItem = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: [0, 2, 0],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {}

const SonaLogo = React.forwardRef<HTMLDivElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showText, setShowText] = React.useState(true);
    const [plus, setPlus] = React.useState(false);
    const [animate, setAnimate] = React.useState(false);
    const time = useTime();
    const colorRotation = useMotionValue(0);

    const colorTransition1 = useTransform(
      colorRotation,
      [0, 25],
      ["#818cf8", "#4f46e5"],
      { clamp: true }
    );

    const colorTransition2 = useTransform(
      colorRotation,
      [0, 50],
      ["#818cf8", "#4f46e5"],
      { clamp: true }
    );

    const colorTransition3 = useTransform(
      colorRotation,
      [0, 75],
      ["#818cf8", "#4f46e5"],
      { clamp: true }
    );

    const colorTransition4 = useTransform(
      colorRotation,
      [0, 100],
      ["#818cf8", "#4f46e5"],
      { clamp: true }
    );

    useMotionValueEvent(time, "change", (v: number) => {
      if (plus) {
        colorRotation.set((colorRotation.getPrevious() || 0) + 0.1);
      } else {
        colorRotation.set((colorRotation.getPrevious() || 0) - 0.1);
      }
    });

    useMotionValueEvent(colorRotation, "change", (v: number) => {
      if (v >= 100) {
        setPlus(false);
      }

      if (v <= 0) {
        setPlus(true);
      }
    });

    React.useEffect(() => {
      if (showText) {
        setTimeout(() => {
          setAnimate(true);
        }, 2000);
      }
    }, [showText]);

    return (
      <motion.div
        layout
        className={cn(
          "flex flex-col p-2 min-h-[200px] items-center justify-center overflow-hidden",
          className
        )}
      >
        <AnimatePresence>
          {showText && (
            <motion.ul
              className="flex flex-row"
              variants={sonaTextVariant}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
            >
              <motion.li
                className="text-8xl font-bold"
                style={{ color: colorTransition1 }}
                variants={sonatTextVariantItem}
              >
                S
              </motion.li>
              <motion.li
                className="text-8xl font-bold"
                style={{ color: colorTransition2 }}
                variants={sonatTextVariantItem}
              >
                O
              </motion.li>
              <motion.li
                className="text-8xl font-bold"
                style={{ color: colorTransition3 }}
                variants={sonatTextVariantItem}
              >
                N
              </motion.li>
              <motion.li
                className="text-8xl font-bold"
                style={{ color: colorTransition4 }}
                variants={sonatTextVariantItem}
              >
                A
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>

        <motion.ul
          className="ml-4 flex flex-row"
          variants={appTextVariant}
          initial={"initial"}
          animate={"animate"}
        >
          <motion.li
            className="text-xl font-bold"
            //@ts-ignore
            variants={appTextVariantItem}
          >
            V
          </motion.li>
          <motion.li
            className="text-xl font-bold"
            //@ts-ignore
            variants={appTextVariantItem}
          >
            O
          </motion.li>
          <motion.li
            className="text-xl font-bold"
            //@ts-ignore
            variants={appTextVariantItem}
          >
            I
          </motion.li>
          <motion.li
            className="text-xl font-bold"
            //@ts-ignore
            variants={appTextVariantItem}
          >
            C
          </motion.li>
          <motion.li
            className="text-xl font-bold"
            //@ts-ignore
            variants={appTextVariantItem}
          >
            E
          </motion.li>
          <motion.li
            className="text-xl font-bold"
            //@ts-ignore
            variants={appTextVariantItem}
          >
            -
          </motion.li>
          <motion.li
            className="text-xl font-bold"
            //@ts-ignore
            variants={appTextVariantItem}
          >
            A
          </motion.li>
          <motion.li
            className="text-xl font-bold"
            //@ts-ignore
            variants={appTextVariantItem}
          >
            P
          </motion.li>
          <motion.li
            className="text-xl font-bold"
            //@ts-ignore
            variants={appTextVariantItem}
          >
            P
          </motion.li>
        </motion.ul>
      </motion.div>
    );
  }
);
SonaLogo.displayName = "SonaLogo";

export { SonaLogo };
