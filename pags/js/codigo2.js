alert("Bienvenidoa al segundo desarrollo de sopa de letras de Modelado de datos. \n\Para seleccionar y completar la palabra se da clic en cada letra que compone dicha palabra "+
      "\n \n\Al encontrar todas las palabras continue con los demas cuetionarios y sopas deletras") 
$(document).ready(function() {
   $(".staruml").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".staruml").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".staruml").click(function() {
    $(this).css("color","#F90");
}); 

  $(".er").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".er").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".er").click(function() {
    $(this).css("color","#F90");
}); 

  $(".entidad").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".entidad").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".entidad").click(function() {
    $(this).css("color","#F90");
}); 

  $(".atributos").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".atributos").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".atributos").click(function() {
    $(this).css("color","#F90");
}); 

  $(".llave").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".llave").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".llave").click(function() {
    $(this).css("color","#F90");
}); 


  $(".foranea").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".foranea").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".foranea").click(function() {
    $(this).css("color","#F90");
}); 

  $(".diseño").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".diseño").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".diseño").click(function() {
    $(this).css("color","#F90");
}); 

  $(".relacion").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".relacion").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".relacion").click(function() {
    $(this).css("color","#F90");
}); 

  $(".modelar").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".modelar").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".modelar").click(function() {
    $(this).css("color","#F90");
}); 

  $(".logico").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".logico").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
$(".logico").click(function() {
    $(this).css("color","#F90");
}); 
$(".no").hover(function() {
    $(this).addClass('resaltar');
}); 
$(".no").mouseleave(function() {
    $(this).removeClass('resaltar');
}); 
});