$('.toggle').click(function(){
          $('.layout').toggleClass('ativo');
          $('.menu-responsivo').toggleClass('ativo');
          $(this).toggleClass('ativo');
        });


    $(document).ready(function($) {
      $(".scroll").click(function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
      });
    });
