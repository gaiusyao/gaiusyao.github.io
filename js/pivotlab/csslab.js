/**
 * PivotLab
 * CSSLab
 * Created by @Gaius42
 */


/**
 * CSS image
 */
var cssFilter = function () {
	$("#css-img").css("filter",
		"saturate(" + saturate.getValue() + "%" + ")" +
		"brightness(" + brightness.getValue() + "%" + ")" +
		"contrast(" + contrast.getValue() + "%" + ")" +
		"blur(" + blur.getValue() + "px" + ")" +
		"opacity(" + opacity.getValue() + "%" + ")" +
		"invert(" + invert.getValue() + "%" + ")" +
		"hue-rotate(" + hueRotate.getValue() + "deg" + ")" +
		"grayscale(" + grayscale.getValue() + "%" + ")" +
		"sepia(" + sepia.getValue() + "%" + ")"
	)
}; // cssFilter

/* hue-rotate */
var hueRotate = $("#hue-rotate").slider()
	.on("slide", cssFilter)
	.data("slider");

$("#hue-rotate").on("slide", function (slideEvt) {
	$("#hueRotateVal").text(slideEvt.value);
});

/* grayscale */
var grayscale = $("#grayscale").slider()
	.on("slide", cssFilter)
	.data("slider");

$("#grayscale").on("slide", function (slideEvt) {
	$("#grayscaleVal").text(slideEvt.value);
});

/* sepia */
var sepia = $("#sepia").slider()
	.on("slide", cssFilter)
	.data("slider");

$("#sepia").on("slide", function (slideEvt) {
	$("#sepiaVal").text(slideEvt.value);
});

/* brightness */
var brightness = $("#brightness").slider()
	.on("slide", cssFilter)
	.data("slider");

$("#brightness").on("slide", function (slideEvt) {
	$("#brightnessVal").text(slideEvt.value);
});

/* saturate */
var saturate = $("#saturate").slider()
	.on("slide", cssFilter)
	.data("slider");

$("#saturate").on("slide", function (slideEvt) {
	$("#saturateVal").text(slideEvt.value);
});

/* contrast */
var contrast = $("#contrast").slider()
	.on("slide", cssFilter)
	.data("slider");

$("#contrast").on("slide", function (slideEvt) {
	$("#contrastVal").text(slideEvt.value);
});

/* opacity */
var opacity = $("#opacity").slider()
	.on("slide", cssFilter)
	.data("slider");

$("#opacity").on("slide", function (slideEvt) {
	$("#opacityVal").text(slideEvt.value);
});

/* invert */
var invert = $("#invert").slider()
	.on("slide", cssFilter)
	.data("slider");

$("#invert").on("slide", function (slideEvt) {
	$("#invertVal").text(slideEvt.value);
});

/* blur */
var blur = $("#blur").slider()
	.on("slide", cssFilter)
	.data("slider");

$("#blur").on("slide", function (slideEvt) {
	$("#blurVal").text(slideEvt.value);
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