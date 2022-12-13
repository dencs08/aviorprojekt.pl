import { splitToLines, splitToChars } from "./cloneSplit"

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function textReveal(text, trigger, revealOnly, scrub, pin, animateOpacity, startOffset, delay) {
    setTimeout(() => {
        splitToLines(text, false);
        revealClip(text, trigger, revealOnly, scrub, pin, animateOpacity, startOffset, delay);
    }, []);
}

export function charReveal(text, trigger, revealOnly, scrub, pin, animateOpacity, startOffset, delay) {
    setTimeout(() => {
        splitToChars(text);
        revealClip(text, trigger, revealOnly, scrub, pin, animateOpacity, startOffset, delay);
    }, []);
}

export function textRevealInline(text, trigger, revealOnly, scrub, pin, animateOpacity, startOffset, delay) {
    setTimeout(() => {
        splitToLines(text, true);
        revealClip(text, trigger, revealOnly, scrub, pin, animateOpacity, startOffset, delay);
    }, []);
}

export function elementReveal(el, trigger, startOffset, delay) {
    setTimeout(() => {
        revealFade(el, trigger, startOffset, delay);
    }, []);
}

function revealClip(text, trigger, revealOnly, scrub, pin, animateOpacity, startOffset, delay) {
    // if (!window.matchMedia("(min-width: 1024px)").matches) return;
    if (!text) return;

    let elements;
    elements = text.querySelectorAll(".line")
    if (elements.length == 0) elements = text.querySelectorAll(".char");

    let tlScroll = gsap.timeline({ defaults: { ease: 'expo' }, paused: true });

    tlScroll
        .to(text, { opacity: 1, autoAlpha: 1, duration: 0, delay: delay })
        .to(elements, { y: "0%", duration: 1.35, stagger: 0.05 })

    if (window.getComputedStyle(text, null).getPropertyValue("content")) tlScroll.to(text, { "--pseudoOpacity": "1", duration: 1 }, "<")
    if (animateOpacity) tlScroll.fromTo(elements, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.05 }, "<");
    if (!revealOnly) tlScroll.to(elements, { y: "-100%", duration: 1, stagger: 0.05 });

    tlScroll.play();
}

function revealFade(el, delay) {
    if (!el) return;

    let tlScroll = gsap.timeline({ defaults: { ease: 'expo' }, paused: true });
    tlScroll
        .to(el, { autoAlpha: 1, delay: delay, duration: 1.5, stagger: 0.25 })

    tlScroll.play();
}

function offsetHeight(el, div) {
    let divOffset = div.offsetTop;;
    if (!div.offsetTop) divOffset = 1;

    let offset = el.offsetTop - divOffset;

    return offset;
}
