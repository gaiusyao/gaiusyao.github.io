/**
 * PivotLab
 * Public js
 * Created by Gaius42
 */

/**
 * footer
 */
$(function(){
    function footerPosition(){
        $("footer").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight,//网页正文全文高度
            winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
        if(!(contentHeight > winHeight)){
            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
            $("footer").addClass("fixed-bottom");
        } else {
            $("footer").removeClass("fixed-bottom");
        }
    }
    footerPosition();
    $(window).resize(footerPosition);
});

/**
 * Others
 */
$(window).scroll(function () {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        $("#back-to-top").attr( {style: "display:block"} );
    } else {
        $("#back-to-top").removeAttr("style");
    }
}); // back-to-top 