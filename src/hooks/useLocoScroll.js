import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../../node_modules/locomotive-scroll/src/locomotive-scroll.scss";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // if (!start) return;
        let locoScroll = null;

        const scrollEl = document.querySelector("#main-container");

        locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            lerp: 0.135,
            getDirection: true,
            class: "is-reveal",
        });

        locoScroll.on("scroll", (args) => {
            ScrollTrigger.update();
            document.documentElement.setAttribute('data-direction', args.direction)
        })

        ScrollTrigger.scrollerProxy(scrollEl, {
            scrollTop(value) {
                if (locoScroll) {
                    return arguments.length
                        ? locoScroll.scrollTo(value, 0, 0)
                        : locoScroll.scroll.instance.scroll.y;
                }
                return null;
            },
            scrollLeft(value) {
                if (locoScroll) {
                    return arguments.length
                        ? locoScroll.scrollTo(value, 0, 0)
                        : locoScroll.scroll.instance.scroll.x;
                }
                return null;
            },
            getBoundingClientRect() {
                if (locoScroll) {
                    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
                }
                return null;
            },
            pinType: document.querySelector("#main-container").style.transform ? "transform" : "fixed"
        });

        const lsUpdate = () => {
            if (locoScroll) {
                locoScroll.update();
            }
        };

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();

        return () => {
            if (locoScroll) {
                ScrollTrigger.removeEventListener("refresh", lsUpdate);
                locoScroll.destroy();
                locoScroll = null;
                console.log("Kill", locoScroll);
            }
        };
    }, []);
}