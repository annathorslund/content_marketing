// -------Animation for pSection----- //
// gsap.to(".pContent", {
//   yPercent: -100,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".pSection",
//     // start: "top bottom", // the default values
//     // end: "bottom top",
//     scrub: true,
//     markers: true,
//   },
// });

// gsap.to(".pImage", {
//   yPercent: 50,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".pSection",
//     // start: "top bottom", // the default values
//     // end: "bottom top",
//     scrub: true,
//   },
// });

// -------Animation for Section 1----- //

gsap.to(".animation_section_content1", {
  yPercent: 10,
  ease: "none",
  scrollTrigger: {
    trigger: ".animation_section1",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true,
    markers: true,
  },
});

gsap.to(".animation_section_image1", {
  yPercent: -60,
  ease: "none",
  scrollTrigger: {
    trigger: ".animation_section1",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true,
  },
});

// -------Animation for Section 2----- //

gsap.to(".animation_section_content2", {
  yPercent: -30,
  ease: "none",
  scrollTrigger: {
    trigger: ".animation_section2",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true,
    markers: true,
  },
});

gsap.to(".animation_section_image2", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".animation_section2",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true,
  },
});

// -------Animation for Section 2.5----- //

// -------Animation for Section 4----- //

gsap.to(".animation_section_content4", {
  yPercent: 30,
  ease: "none",
  scrollTrigger: {
    trigger: ".animation_section4",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true,
    markers: true,
  },
});

gsap.to(".animation_section_image4", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".animation_section4",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true,
  },
});
