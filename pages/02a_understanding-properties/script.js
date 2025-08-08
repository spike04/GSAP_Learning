import gsap from 'gsap'

gsap.to('.box', {
  y: 200,
  opacity: 1,
  rotation: 360,
  background: '#ff6f61',
  borderRadius: '50%',
  scale: 1.25,
  duration: 2, // Not a CSS Property
  ease: 'bounce',
  // repeat: -1,
  // yoyo: true,
  // repeatDelay: 1,
  // paused: true,
  stagger: 1,
})
