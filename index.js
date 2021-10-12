gsap.registerPlugin(ScrollTrigger);

gsap.to(".section-02 h2", {
  scrollTrigger: {
    scroller: ".panel",
    trigger: ".section_hayde",
    start: "center 55%",
    markers: true,
    toggleActions: "play complete restart reverse",
  },
  scale: 4,
  duration: 2,
  ease: "back",
});
