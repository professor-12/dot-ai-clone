const allAnimationel = document.querySelectorAll(".animate-js")


const intersectionOberver = new IntersectionObserver((e) => {
      e.forEach(el => {
            if (el.isIntersecting) {
                  const animationclassToAdd = el.target.getAttribute("data-animate")
                  el.target.className += " " + animationclassToAdd
            }
      })
})





allAnimationel.forEach((el: any) => {

      el.style.animationDelay = el.getAttribute("data-delay") + "s"
      intersectionOberver.observe(el)
})