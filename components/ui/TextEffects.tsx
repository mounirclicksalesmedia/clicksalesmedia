"use client";

import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextGenerateEffect({
    words,
    className,
    filter = true,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration,
                delay: stagger(0.1),
            }
        );
    }, [animate, duration, filter]);

    return (
        <motion.div ref={scope} className={cn("font-bold", className)}>
            {wordsArray.map((word, idx) => {
                return (
                    <motion.span
                        key={word + idx}
                        className="opacity-0"
                        style={{
                            filter: filter ? "blur(10px)" : "none",
                        }}
                    >
                        {word}{" "}
                    </motion.span>
                );
            })}
        </motion.div>
    );
}

export function TypewriterEffect({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex].text;
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (currentText.length < word.length) {
                        setCurrentText(word.slice(0, currentText.length + 1));
                    } else {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    if (currentText.length > 0) {
                        setCurrentText(word.slice(0, currentText.length - 1));
                    } else {
                        setIsDeleting(false);
                        setCurrentWordIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words]);

    return (
        <div className={cn("inline-flex items-center", className)}>
            <span className={words[currentWordIndex].className}>{currentText}</span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block h-8 w-[4px] bg-[#AD8253] ml-1",
                    cursorClassName
                )}
            />
        </div>
    );
}

export function FadeInText({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
