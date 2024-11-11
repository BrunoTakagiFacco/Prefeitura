$(document).ready(function($){
    $('.slider1').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
      });
});
$(document).ready(function(){
  $('.servico').slick({
      vertical: true,             // Ativa o modo vertical
      slidesToShow: 3,            // Número de botões visíveis de uma vez
      slidesToScroll: 1,          // Número de botões que rolam a cada ação
      infinite: false,            // Desativa o loop infinito
      arrows: true,               // Exibe setas para navegação
      dots: false                 // Desativa pontos de navegação
  });
});