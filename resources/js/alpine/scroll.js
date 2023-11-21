export default  () => ({
  init(){
    let bloccoIscrizione = $('#blocco-iscrizione').offset().top;
    // let bloccoTutor = $('#blocco-tutor').offset().top;
    let bloccoObblighi = $('#blocco-obblighi').offset().top;
    // let bloccoNormativa = $('#blocco-normativa').offset().top;
    let bloccoscadenze = $('#blocco-scadenze').offset().top;


    $(window).scroll(function() {
      let $el = $('.contenitoreScroll');  
      let contenitoreScroll = $el.offset().top; 


      // if( contenitoreScroll >  Math.round(bloccoIscrizione) && contenitoreScroll <  (Math.round(bloccoTutor)) ) {
      //   $('#blocco-iscrizioni-c').addClass( "bg-purple-100 px-2 rounded font-bold" );
      // } else {
      //   $('#blocco-iscrizioni-c').removeClass( "bg-purple-100 px-2 rounded font-bold" );
      // }

      // if( contenitoreScroll >  Math.round(bloccoTutor) && contenitoreScroll < (Math.round(bloccoObblighi)) ) {
      //   $('#blocco-iscrizioni-c').removeClass( "bg-purple-100 px-2 rounded font-bold" );
      //   $('#blocco-tutor-c').addClass( "bg-purple-100 px-2 rounded font-bold" );
      // } else {
      //   $('#blocco-tutor-c').removeClass( "bg-purple-100 px-2 rounded font-bold" );
      // }

      if( contenitoreScroll > Math.round(bloccoIscrizione) && contenitoreScroll < Math.round(bloccoObblighi)) {
        $('#blocco-iscrizioni-c').addClass( "bg-purple-100 px-2 rounded font-bold" );
      } else {
        $('#blocco-iscrizioni-c').removeClass( "bg-purple-100 px-2 rounded font-bold" );
      }

      if( contenitoreScroll > Math.round(bloccoObblighi) && contenitoreScroll < Math.round(bloccoscadenze)  ) {
        $('#blocco-iscrizioni-c').removeClass( "bg-purple-100 px-2 rounded font-bold" );
        $('#blocco-obblighi-c').addClass( "bg-purple-100 px-2 rounded font-bold" );
      } else {
        $('#blocco-obblighi-c').removeClass( "bg-purple-100 px-2 rounded font-bold" );
      }

      // if( contenitoreScroll >  Math.round(bloccoNormativa)) {
      //   $('#blocco-obblighi-c').removeClass( "bg-purple-100 px-2 rounded font-bold" );
      //   $('#blocco-normativa-c').addClass( "bg-purple-100 px-2 rounded font-bold" );
      // } else {
      //   $('#blocco-normativa-c').removeClass( "bg-purple-100 px-2 rounded font-bold" );
      // }

      if( contenitoreScroll > (Math.round(bloccoscadenze) - 100) ) {
        $('#blocco-normativa-c').removeClass( "bg-purple-100 px-2 rounded font-bold" );
        $('#blocco-scadenze-c').addClass( "bg-purple-100 px-2 rounded font-bold" );
      } else {
        $('#blocco-scadenze-c').removeClass( "bg-purple-100 px-2 rounded font-bold" );
      }



      // if( contenitoreScroll >  Math.round(bloccoNormativa) ) {
      //   $('#blocco-normativa-c').removeClass( "bg-purple-100 px-2 rounded font-bold" );
      //   $('#blocco-bloccoscadenze-c').addClass( "bg-purple-100 px-2 rounded font-bold" );
      // } else {
      //   $('#blocco-bloccoscadenze-c').removeClass( "bg-purple-100 px-2 rounded font-bold" );
      // }

      // if( contenitoreScroll >  (Math.round(bloccoscadenze) - Math.round(550)) ) {
      //   console.log('entro')
      //   $('#blocco-normativa-c').removeClass( "bg-purple-100 px-2 rounded font-bold" );
      //   $('#blocco-scadenze-c').addClass( "bg-purple-100 px-2 rounded font-bold" );
      // } else {
      //   $('#blocco-scadenze-c').removeClass( "bg-purple-100 px-2 rounded font-bold" );
      // }

    });


  },
  goTo(slug){
    // Scroll to specific values
    // scrollTo is the same
    window.scroll({
      top:  Math.round($(slug).offset().top), 
      left: 0, 
      behavior: 'smooth'
    });

    // Scroll certain amounts from current position 
  //   window.scrollBy({ 
  //     top: 100, // could be negative value
  //     left: 0, 
  //     behavior: 'smooth' 
  //   });

  //  // Scroll to a certain element
  //  document.querySelector(slug).scrollIntoView({ 
  //   behavior: 'smooth' 
  // });
},
goToPage(page){
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
      return false;
    } // End if
}

})







