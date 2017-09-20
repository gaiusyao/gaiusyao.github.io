/**
 * PivotLab
 * CSSLab
 * Created by @Gaius42
 */


/**
 * CSS image
 */
var cssFilter = function() {
	$("#css-img").css("filter", "grayscale("+grayscale.getValue()+"%"+")")
}; // cssFilter

/* grayscale */
var grayscale = $("#ex6").slider()
				.on("slide", cssFilter)
				.data("slider");

$("#ex6").slider();
$("#ex6").on("slide", function(slideEvt) {
    $("#ex6SliderVal").text(slideEvt.value);
}); 

/**
 * RGB Slider
 */

var RGBChange = function() {
	$(".bg-blend").css("background-color", "rgb("+r.getValue()+","+g.getValue()+","+b.getValue()+")")
}; // bg-color

var r = $("#R").slider()
		.on("slide", RGBChange)
		.data("slider");
var g = $("#G").slider()
		.on("slide", RGBChange)
		.data("slider");
var b = $("#B").slider()
		.on("slide", RGBChange)
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