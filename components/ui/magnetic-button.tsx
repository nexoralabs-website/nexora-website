"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/use-animations";
import { buttonVariants, type ButtonProps } from "@/components/ui/button";

interface MagneticButtonProps extends ButtonProps {
  href?: string;
}

export function MagneticButton({
  children,
  href,
  className,
  variant,
  size,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const { x, y } = useMagnetic(ref);

  const classes = cn(buttonVariants({ variant, size, className }));

  if (href) {
    return (
      <motion.div style={{ x, y }} className="inline-block">
        <Link ref={ref as React.RefObject<HTMLAnchorElement>} href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div style={{ x, y }} className="inline-block">
      <button ref={ref as React.RefObject<HTMLButtonElement>} className={classes} {...props}>
        {children}
      </button>
    </motion.div>
  );
}
