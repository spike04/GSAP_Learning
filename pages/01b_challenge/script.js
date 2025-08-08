gsap.to('.card', {
  scale: 1.5,
  opacity: 0,
  duration: 2,
  stagger: {
    each: 0.5,
    repeat: -1,
  },
}).time(2)
