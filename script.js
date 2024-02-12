function ini(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
// ini();
// gsap.from("#page2-left img",{
//     x:-800,
//     duration:3,
//     scrollTrigger:{
//         scroller:"#main",
//         trigger:"#page2-left img",
//         scrub:2,
//         start:"top 80%",
//         end:"top 60%",
//         // markers:true,
//     }
// });
// gsap.from("#page2-left h1",{
//     x:-550,
//     duration:1,
//     scrollTrigger:{
//         scroller:"#main",
//         trigger:"#page2-left img",
//         scrub:2,
//         start:"top -10%",
//         end:"top 20%",
//         // markers:true,
//     }
// })
// gsap.from("nav h1",{
//     x:-300,
//     duration:1.5,
//     opacity:0
// })
// gsap.from("nav #l",{
//     x:1000,
//     opacity:0,
//     duration:1.5,
// })
// gsap.from("#page3-left h1",{
//     x:-500,
//     opacity:0,
//     duration:5,
//     scrollTrigger:{
//         scroller:"#main",
//         trigger:"#page3-left h1",
//         scrub:2,
//         // markers:true,
//         start:"top 90%",
//         end:"top 80%",
//     }
// })
// gsap.from("#elem-right",{
//     x:1000,
//     opacity:0,
//     stagger:0.2,
//     scrollTrigger:{
//       scroller:"#main",
//       trigger:"#elem-right",
//       scrub:2,
//       start:"top 90%",
//       end:"top 50%",
//       // markers:true
//   }
// })
// gsap.from("#po1",{
//     x:1000,
//     opacity:0,
//     stagger:0.3,
//     scrollTrigger:{
//       scroller:"#main",
//       trigger:"#po1",
//       start:"top 100%",
//       end:"top 98%",
//       // markers:true,
//       scrub:2
//   }
// })
// gsap.from("#content",{
//   x:1000,
//   opacity:0,
//   duration:1.5,
// })
//!
function initScrollAnimation() {
  if (window.innerWidth >= 600) {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });

    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    // Your GSAP animations using ScrollTrigger
    // Example:
    gsap.from("#page2-left img",{
      x:-800,
      duration:3,
      scrollTrigger:{
          scroller:"#main",
          trigger:"#page2-left img",
          scrub:2,
          start:"top 80%",
          end:"top 60%",
          // markers:true,
      }
  });
  gsap.from("#page2-left h1",{
      x:-550,
      duration:1,
      scrollTrigger:{
          scroller:"#main",
          trigger:"#page2-left img",
          scrub:2,
          start:"top -10%",
          end:"top 20%",
          // markers:true,
      }
  })
  gsap.from("nav h1",{
      x:-300,
      duration:1.5,
      opacity:0
  })
  gsap.from("nav #l",{
      x:1000,
      opacity:0,
      duration:1.5,
  })
  gsap.from("#page3-left h1",{
      x:-500,
      opacity:0,
      duration:5,
      scrollTrigger:{
          scroller:"#main",
          trigger:"#page3-left h1",
          scrub:2,
          // markers:true,
          start:"top 90%",
          end:"top 80%",
      }
  })
  gsap.from("#elem-right",{
      x:1000,
      opacity:0,
      stagger:0.2,
      scrollTrigger:{
        scroller:"#main",
        trigger:"#elem-right",
        scrub:2,
        start:"top 90%",
        end:"top 50%",
        // markers:true
    }
  })
  gsap.from("#po1",{
      x:1000,
      opacity:0,
      stagger:0.3,
      scrollTrigger:{
        scroller:"#main",
        trigger:"#po1",
        start:"top 100%",
        end:"top 98%",
        // markers:true,
        scrub:2
    }
  })
  gsap.from("#content",{
    x:1000,
    opacity:0,
    duration:1.5,
  })
  }
}

// Initialize scroll animation on page load
initScrollAnimation();

// Reinitialize scroll animation when viewport is resized
window.addEventListener("resize", initScrollAnimation);
//!