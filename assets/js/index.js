$(document).ready(function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

$("#icono-card-1").click(function(){
    $("#parrafo-card-1").toggle();
});
$("#icono-card-2").click(function(){
    $("#parrafo-card-2").toggle();
});
$("#icono-card-3").click(function(){
    $("#parrafo-card-3").toggle();
});

$("#card-1").click(function(){
    $("#card-1").hide();
});
$("#card-2").click(function(){
    $("#card-2").hide();
});
$("#card-3").click(function(){
    $("#card-3").hide();
});
$("#card-4").click(function(){
    $("#card-4").hide();
});