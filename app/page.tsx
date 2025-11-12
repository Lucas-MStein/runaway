"use client";

import Typewriter from "@/components/Typewriter";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import { Lobster } from "next/font/google";

const lobster = Lobster({
    subsets: ["latin"],  // wichtig, sonst fehlen Umlaute
    weight: "400",       // Schriftstärke (abhängig von Font)
});
export default function Page() {
    return (
        <main className="min-h-screen text-neutral-900 bg-white">
            {/* === HERO SECTION === */}
            <section className="relative flex items-center justify-center min-h-[100vh] text-center text-white">
                {/* Hintergrundbild */}
                <Image
                    src="/hero.jpg"                // liegt im /public Ordner
                    alt="Hero Hintergrund"
                    fill                            // nimmt gesamte Section ein
                    priority
                    className="object-cover object-center brightness-[0.45]"
                />

                {/* Overlay-Content */}
                <div className="relative z-10 px-6">
                    <h1 className="text-5xl md:text-7xl font-semibold mb-4">
                        <span className={lobster.className}>Für Selina</span>
                    </h1>
                </div>
            </section>

            {/* === Abschnitt 1 === */}
            <section className="min-h-[90vh] flex items-center justify-center px-6 bg-neutral-100">
                <div className="max-w-3xl mx-auto">
                    <RevealOnScroll>
                        {(start) => (
                            <Typewriter
                                start={start}
                                className="text-xl md:text-2xl"
                                steps={[
                                    "Ich liebe es, Unsinn zu treiben.",
                                    {
                                        text: "Und das hier ist wahrscheinlich meine größte Quatschidee!",
                                        pauseMs: 800,
                                    },
                                    "Mein Ziel: Eine Antwort von Selina.",
                                ]}
                            />
                        )}
                    </RevealOnScroll>
                </div>
            </section>

            {/* === Abschnitt 2 === */}
            <section className="min-h-[90vh] flex items-center justify-center px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <RevealOnScroll>
                        {(start) => (
                            <Typewriter
                                start={start}
                                className="text-xl md:text-2xl"
                                steps={[
                                    "Was ich gemacht habe:",
                                    { text: "• eine Domain gekauft", pauseMs: 500 },
                                    { text: "• den Code geschrieben", pauseMs: 500 },
                                    { text: "• die Website veröffentlicht", pauseMs: 500 },
                                ]}
                            />
                        )}
                    </RevealOnScroll>
                </div>
            </section>

            {/* === Abschnitt 3 === */}
            <section className="min-h-[90vh] flex items-center justify-center px-6 bg-neutral-900 text-neutral-100">
                <div className="max-w-3xl mx-auto text-center">
                    <RevealOnScroll>
                        {(start) => (
                            <Typewriter
                                start={start}
                                className="text-xl md:text-2xl"
                                steps={[
                                    "Lust auf ein gemeinsames Projekt?",
                                    {
                                        text: "Ruf mich einfach an – ich freu mich drauf!",
                                        pauseMs: 800,
                                    },
                                ]}
                            />
                        )}
                    </RevealOnScroll>

                    {/* Telefonnummer */}
                    <RevealOnScroll>
                        {(start) =>
                            start && (
                                <a
                                    href="tel:+4917647736812" // <-- hier deine Nummer eintragen
                                    className="inline-block mt-8 text-2xl font-semibold text-blue-400 hover:text-blue-300 transition"
                                >
                                    +49 176 47736812
                                </a>
                            )
                        }
                    </RevealOnScroll>

                    {/* YouTube-Link */}
                    <RevealOnScroll>
                        {(start) =>
                            start && (
                                <p className="mt-4 text-sm text-neutral-400">
                                    Oder schau dir dieses{" "}
                                    <a
                                        href="https://youtu.be/pZUzfyWQkEI?si=P3qFmwtZHEQwTkSZ" // <-- hier dein YouTube-Link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-blue-400 transition"
                                    >
                                        YouTube-Video
                                    </a>{" "}
                                    an 🎥
                                </p>
                            )
                        }
                    </RevealOnScroll>
                </div>
            </section>
        </main>
    );
}