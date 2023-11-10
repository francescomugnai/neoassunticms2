
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
const targetElement = document.querySelector('#burgermenu');

export default  () => ({
  userChoice: localStorage.getItem('userChoice'),
  menuOpened: false,
  open: false,
  attivo: false,
  vh: false,
  init(){
    localStorage.setItem('menuOpened', false)
    this.menuOpened = false

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    this.vh = window.innerHeight * 0.01;

    // Then we set the value in the --vh custom property to the root of the document
    // document.documentElement.style.setProperty('--vh', `${this.vh}px`);
    document.documentElement.style.setProperty('--vh', `${this.vh}px`);

    window.addEventListener('resize', function(event) {
      burgermenu.style.height = window.innerHeight + 'px'
   }, true);


  },
  openMenu(){
    disableBodyScroll(targetElement);


    this.menuOpened = JSON.parse(localStorage.getItem('menuOpened'))
    this.open = !this.open
    // document.getElementById("burgermenu").style.backgroundImage = 'url("/assets/bg-menu.jpg")';

    if(!this.menuOpened){
      document.getElementById('stanghetta1').classList.remove('-translate-y-1.5', 'rotate-0')
      document.getElementById('stanghetta2').classList.remove('opacity-100')
      document.getElementById('stanghetta3').classList.remove('translate-y-1.5', 'rotate-0')

      document.getElementById('stanghetta1').classList.add('rotate-45')
      document.getElementById('stanghetta2').classList.add('opacity-0')
      document.getElementById('stanghetta3').classList.add('-rotate-45')
      localStorage.setItem('menuOpened', true)
    } else {
      document.getElementById('stanghetta1').classList.remove('rotate-45')
      document.getElementById('stanghetta2').classList.remove('opacity-0')
      document.getElementById('stanghetta3').classList.remove('-rotate-45')

      document.getElementById('stanghetta1').classList.add('-translate-y-1.5', 'rotate-0')
      document.getElementById('stanghetta2').classList.add('opacity-100')
      document.getElementById('stanghetta3').classList.add('translate-y-1.5', 'rotate-0')
      localStorage.setItem('menuOpened', false)
    }


    let tl = gsap.timeline();


    
    // Questo mi serve per il bug su iOS
    let calcoloAltezza =  window.innerHeight + 'px'

    tl
    .set('#burgermenu', {
      height: "0",
    })
    .set('#menuitems', {
      yPercent: 50,
      display:'flex',
    })
    .set('.animateRight', {
      yPercent: -50
    })
    .to('#burgermenu', 1.2, {
      display:'flex',
      zIndex: "60" ,
      delay: 0.3,
      height: calcoloAltezza,
      autoAlpha: 1,
      ease: Expo.easeInOut,
    })
    .to('#menuitems', 1.2, {
      yPercent: 0,
      autoAlpha: 1,
      ease: Expo.easeInOut,
    }) 
    .to('.animateRight', {
      opacity: 0.99,
      autoAlpha: 1,
      yPercent: 0,
      stagger: 0.20,
      ease: Expo.easeInOut,
    })
    .add(() => {
        this.attivo = false
    })
  }
})