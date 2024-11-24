import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipPathAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipPathAnimation.to('.mask-clip-path', {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        })
    })


    return (
        <div id="about" className="w-screen min-h-screen">
            <div className="relative mb-8 mt-36 flex flex-col gap-5 items-center">
                <h2 className="font-general text-sm uppercase md:text-[10px]">Welcome to zentry</h2>

                <AnimatedText
                    title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
                    containerClass="mt-5 !text-black text-center"
                />

                <div className="about-subtext">
                    <p>The Game of Game begins-your life, now an epic MMORPG</p>
                    <p className="text-gray-500">Zentry unites every player from countless games and platforms, both
                        digital and physical, into a unified Play Economy</p>
                </div>
            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img src="img/about.webp" alt="about image" className="absolute left-0 top-0 size-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default About