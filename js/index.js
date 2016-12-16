$('.toggle').click(function(){
          $('.layout').toggleClass('ativo');
          $('.menu-responsivo').toggleClass('ativo');
          $(this).toggleClass('ativo');
        });


    var slideIndex = 0;
    carousel();
    function carousel() {
    var i;
    var x = document.getElementsByClassName("Slides");
      for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}
      x[slideIndex-1].style.display = "block";
      setTimeout(carousel, 2500); // Muda a imagem a cada 3 segundos
    }

    $(document).ready(function($) {
      $(".scroll").click(function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
      });
    });
