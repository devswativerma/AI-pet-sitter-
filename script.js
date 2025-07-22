// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Navbar slide-in animation from top
gsap.to("#navbar", {
  duration: 1,
  y: 0,
  ease: "power4.out"
});

// Scroll-triggered fade-in for sections
gsap.utils.toArray(".fade-section").forEach(section => {
  gsap.to(section, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});

  
// Button hover pulse animation
const buttons = document.querySelectorAll(".pulse-button");

buttons.forEach(button => {
  let pulseTween;
  button.addEventListener("mouseenter", () => {
    pulseTween = gsap.to(button, {
      scale: 1.1,
      duration: 0.3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
  });

  button.addEventListener("mouseleave", () => {
    if (pulseTween) {
      pulseTween.kill();
    }
    gsap.to(button, {
      scale: 1,
      duration: 0.3,
      ease: "power1.inOut"
    });
  });
});

  



