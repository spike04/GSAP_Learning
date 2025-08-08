import gsap from 'gsap'

const showToastTwo = () => {
  gsap.to('.two', {
    y: -120,
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: 'power4.out',
    onComplete: () => {
      gsap.to('.two', {
        delay: 2,
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: 'power.in',
        onComplete: showToastOne,
      })
    },
  })
}

const showToastOne = () => {
  gsap.to('.one', {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'power4.out',
    zIndex: 2,
    onComplete: () => {
      gsap.to('.one', {
        delay: 2,
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: 'power.in',
        onComplete: showToastTwo,
      })
    },
  })
}

showToastOne()
