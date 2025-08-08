import gsap from 'gsap'

function cardFlip() {
  gsap.to('.card-front', {
    rotateY: 90,
    duration: 2,
    ease: 'power4.in',
    onComplete: () => {
      gsap.from('.card-back', {
        rotateY: -90,
      })
      gsap.to('.card-back', {
        rotateY: 0,
        duration: 2,
        ease: 'power4.in',
      })
    },
  })
}

cardFlip()
