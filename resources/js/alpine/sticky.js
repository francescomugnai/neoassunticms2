

export default  () => ({
  inscroll : false,
  stickyElement(fixedElement, elementToStartFor, fineScroll,  navOrNot){
    let yourNavigation = $(fixedElement);

    // Creo una variabile per calcolare l'offset nel caso il parametro non fosse passato 
    let elementOffset = 5000
    elementOffset = $(elementToStartFor).offset().top

    // Il calcolo serve a bloccare lo sticky 
    let calcolo = 0

    if(navOrNot == true){
       calcolo = Math.round(elementOffset); 
    } else {
      // Ci levo l'altezza del menu 
       calcolo = Math.round(elementOffset) - Math.round(70); 
    }

    let that = this
    $(window).scroll(function() {
        let width = $(this).width()

        if( $(this).scrollTop() > calcolo && width > 600  ) {
            that.inscroll = true
            yourNavigation.addClass("fixed");
            yourNavigation.addClass("top-0");
        } else {
            that.inscroll = false
            yourNavigation.removeClass("fixed");
            yourNavigation.removeClass("top-0");
        }

        if(navOrNot != true){
          if( $(this).scrollTop() >  $(fineScroll).offset().top  ) {
              that.inscroll = false
              yourNavigation.removeClass("fixed");
              yourNavigation.removeClass("top-0");
          }
        }
    }); 
  }
})