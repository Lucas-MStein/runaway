"use client";
import React, { useEffect, useRef, useState } from "react";

type Step = string | { text: string; pauseMs?: number };

type Props = {
    steps: Step[];
    start: boolean;
    typeSpeedMs?: number;
    stepPauseMs?: number;
    cursor?: boolean;
    className?: string;
    onDone?: () => void;
};

export default function Typewriter({
                                       steps,
                                       start,
                                       typeSpeedMs = 35,
                                       stepPauseMs = 600,
                                       cursor = true,
                                       className,
                                       onDone,
                                   }: Props) {
    const [output, setOutput] = useState("");
    const startedRef = useRef(false);
    const doneRef = useRef(false);

    useEffect(() => {
        if (!start || startedRef.current || doneRef.current) return;
        startedRef.current = true;

        let cancelled = false;

        (async () => {
            for (let i = 0; i < steps.length; i++) {
                const s = steps[i];
                const text = typeof s === "string" ? s : s.text;
                const pause = typeof s === "string" ? stepPauseMs : s.pauseMs ?? stepPauseMs;

                // Zeichen für Zeichen tippen
                for (let j = 0; j < text.length; j++) {
                    if (cancelled) return;
                    setOutput((prev) => prev + text[j]);
                    await new Promise((r) => setTimeout(r, typeSpeedMs));
                }

                // Zwischen-Pause + Zeilenumbruch (außer beim letzten Step)
                if (i < steps.length - 1) {
                    setOutput((prev) => prev + "\n");
                    if (pause > 0) await new Promise((r) => setTimeout(r, pause));
                }
            }

            if (!cancelled) {
                doneRef.current = true;
                onDone?.();
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [start]); // << nur auf 'start' hören

    return (
        <pre
            className={["whitespace-pre-wrap leading-relaxed", className].filter(Boolean).join(" ")}
            aria-live="polite"
        >
      {output}
            {cursor && <span className="inline-block w-2 ml-0.5 align-baseline animate-pulse">▍</span>}
            <style jsx>{`
                .animate-pulse { animation: pulse 1s steps(2, end) infinite; }
                @keyframes pulse { 0% {opacity: 1;} 50% {opacity: 0;} 100% {opacity: 1;} }
            `}</style>
    </pre>
    );
}