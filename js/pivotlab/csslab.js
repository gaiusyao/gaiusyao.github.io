/**
 * RGB Slider
 */

var RGBaChange = function() {
	$(".bg-blend").css("background-color", "rgb("+r.getValue()+","+g.getValue()+","+b.getValue()+")")
}; // bg-color

var r = $("#R").slider()
		.on("slide", RGBaChange)
		.data("slider");
var g = $("#G").slider()
		.on("slide", RGBaChange)
		.data("slider");
var b = $("#B").slider()
		.on("slide", RGBaChange)
        .data("slider");

$("#R").slider();
$("#R").on("slide", function(slideEvt) {
    $("#rSliderVal").text(slideEvt.value);
}); //rSilderVal

$("#G").slider();
$("#G").on("slide", function(slideEvt) {
    $("#gSliderVal").text(slideEvt.value);
}); //gSilderVal

$("#B").slider();
$("#B").on("slide", function(slideEvt) {
    $("#bSliderVal").text(slideEvt.value);
}); //bSilderVal