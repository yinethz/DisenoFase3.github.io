alert("Bienvenido a la primera sopa de letras de Modelado de datos. \n\Para seleccionar y completar la palabra se da clic en cada letra que compone dicha palabra "+
      "\n \n\Al encontrar todas las palabras continue con los demas cuetionarios y sopas deletras") 
$(document).ready(function() {
   $(".modelado").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".modelado").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".modelado").click(function() {
    $(this).css("color","#09F");
}); 

  $(".respaldo").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".respaldo").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".respaldo").click(function() {
    $(this).css("color","#09F");
}); 

  $(".sistema").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".sistema").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".sistema").click(function() {
    $(this).css("color","#09F");
}); 

  $(".datos").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".datos").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".datos").click(function() {
    $(this).css("color","#09F");
}); 

  $(".google").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".google").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".google").click(function() {
    $(this).css("color","#09F");
}); 


  $(".gestores").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".gestores").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".gestores").click(function() {
    $(this).css("color","#09F");
}); 

  $(".sql").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".sql").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".sql").click(function() {
    $(this).css("color","#09F");
}); 

  $(".oracle").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".oracle").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".oracle").click(function() {
    $(this).css("color","#09F");
}); 

  $(".frank").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".frank").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".frank").click(function() {
    $(this).css("color","#09F");
}); 

  $(".copia").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".copia").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".copia").click(function() {
    $(this).css("color","#09F");
}); 
$(".no").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".no").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
});