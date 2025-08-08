gsap.to('.card', {
  opacity: 1,
  scale: 1,
  duration: 2,
  onComplete: () => {
    gsap.to('.card', {
      y: -20,
      repeat: -1, // repeat indefinitely
      yoyo: true,
      duration: 0.3,
    })
  },
})
