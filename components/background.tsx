'use client'
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const Background = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = "#0b1e39"; // Dark blue space-like background

        initParticlesEngine(async (engine) => {
            await loadFull(engine); // Load full version for richer effects
        }).then(() => {
            setInit(true);
        });

        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    options={{
                        background: {
                            color: { value: "#0b1e39" },
                        },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "slow",
                                },
                            },
                            modes: {
                                slow: {
                                    factor: 1,
                                    radius: 300,
                                },
                            },
                        },
                        particles: {
                            color: { value: "#a0c4ff" }, // Soft blue particles
                            links: {
                                color: "#ffffff",
                                distance: 200,
                                enable: true,
                                opacity: 0.3,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: { default: "out" },
                                random: true,
                                speed: 1.2,
                                straight: false,
                            },
                            number: {
                                density: { enable: true },
                                value: 100,
                            },
                            opacity: {
                                value: 0.6,
                                animation: {
                                    enable: true,
                                    speed: 1,
                                    sync: false,
                                },
                            },
                            shape: { type: "circle" },
                            size: {
                                value: { min: 1, max: 4 },
                                animation: {
                                    enable: true,
                                    speed: 2,
                                    sync: false,
                                },
                            },
                        },
                        detectRetina: true,
                    }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        zIndex: -1,
                    }}
                />
            )}
        </>
    );
};

export default Background;
