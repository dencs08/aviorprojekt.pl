import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../../node_modules/locomotive-scroll/src/locomotive-scroll.scss";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
    useLayoutEffect(() => {
        // if (!start) return;

        gsap.registerPlugin(ScrollTrigger);
        let locoScroll = null;
        const scrollEl = document.querySelector("#main-container");

        window.locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            lerp: 0.135,
            getDirection: true,
            class: "is-reveal",
            reloadOnContextChange: true,
            smartphone: {
                smooth: false
            },
            tablet: {
                smooth: false
            }
        });

        window.locoScroll.stop();
        setTimeout(() => {
            window.locoScroll.start();
        }, 1000);

        window.locoScroll.on("scroll", (args) => {
            ScrollTrigger.update();
            document.documentElement.setAttribute('data-direction', args.direction)
        })

        ScrollTrigger.scrollerProxy(scrollEl, {
            scrollTop(value) {
                if (window.locoScroll) {
                    return arguments.length
                        ? window.locoScroll.scrollTo(value, 0, 0)
                        : window.locoScroll.scroll.instance.scroll.y;
                }
                return null;
            },
            scrollLeft(value) {
                if (window.locoScroll) {
                    return arguments.length
                        ? window.locoScroll.scrollTo(value, 0, 0)
                        : window.locoScroll.scroll.instance.scroll.x;
                }
                return null;
            },
            getBoundingClientRect() {
                if (window.locoScroll) {
                    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
                }
                return null;
            },
            pinType: document.querySelector("#main-container").style.transform ? "transform" : "fixed"
        });

        const lsUpdate = () => {
            if (window.locoScroll) {
                window.locoScroll.update();
            }
        };

        ScrollTrigger.addEventListener("refresh", () => window.locoScroll.update());
        ScrollTrigger.refresh();

        return () => {
            if (window.locoScroll) {
                ScrollTrigger.removeEventListener("refresh", lsUpdate);
                window.locoScroll.destroy();
                window.locoScroll = null;
                console.log("Kill", window.locoScroll);
            }
        };
    }, []);
}