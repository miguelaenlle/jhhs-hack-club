import * as React from "react"
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground: React.FC<{}> = (props) => {
    const particlesInit = React.useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = React.useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (

        <Particles
            className={"z-0 bg-neutral-900"}
            id="tsparticles"
            canvasClassName="particles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: -1
            }}
            options={{
                fullScreen: {
                    enable: false
                },
                background: {
                    color: {
                        value: "#121217",
                    },
                },
                fpsLimit: 30,
                particles: {
                    color: {
                        value: "rgba(17,38,34,1)",
                    },
                    links: {
                        color: "rgba(17,38,34,1)",
                        distance: 150,
                        enable: true,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
export default ParticlesBackground