"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
    rootMargin?: string;
    threshold?: number | number[];
    once?: boolean;     // nur einmal triggern (Default: true)
    children: (visible: boolean) => React.ReactNode;
    className?: string;
};

export default function RevealOnScroll({
                                           rootMargin = "0px 0px -20% 0px",
                                           threshold = 0.2,
                                           once = true,
                                           children,
                                           className,
                                       }: Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);
    const [fired, setFired] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        if (once) setFired(true);
                    } else if (!once) {
                        setVisible(false);
                    }
                });
            },
            { root: null, rootMargin, threshold }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [rootMargin, threshold, once]);

    return (
        <div ref={ref} className={className}>
            {children(once ? (visible || fired) : visible)}
        </div>
    );
}