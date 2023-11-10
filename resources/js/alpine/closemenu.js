
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
const targetElement = document.querySelector('#burgermenu');

export default  () => ({
  userChoice: localStorage.getItem('userChoice'),
  darkMode: localStorage.getItem('dark') === 'true',
  open: false,
  attivo: false,
  closeMenu(){
    this.open = !this.open
    let tl = gsap.timeline();
    tl
    .to('.animateRight', {
      opacity: 0,
      autoAlpha: 0,
      yPercent: -50,
      stagger: 0.20,
      ease: Expo.easeInOut,
    })
    .to('#menuitems', {
      display:'none',
      opacity: 0,
      ease: Expo.easeInOut,
    }) 
    .add(() => {
      enableBodyScroll(targetElement);
    })
    .to('#burgermenu', 1.2, {
      display:'none',
      zIndex: "0" ,
      height: "0vh",
      autoAlpha: 1,
      delay: -0.50,
      ease: Expo.easeInOut,
      onComplete: () => {
        document.getElementById('stanghetta1').classList.remove('rotate-45')
        document.getElementById('stanghetta1').classList.add('-translate-y-1.5', 'rotate-0')

        document.getElementById('stanghetta2').classList.remove('opacity-0')
        document.getElementById('stanghetta2').classList.add('opacity-100')

        document.getElementById('stanghetta3').classList.remove('-rotate-45')
        document.getElementById('stanghetta3').classList.add('translate-y-1.5', 'rotate-0')
      }
    })
    .add(() => {
        this.attivo = false
    })
  },
})