$(document).ready(function(){
    var temp = "";
    $("img").hover(function(){
        temp = $(this).attr("src");
        var newSource = $(this).attr("data-alt-src");
        $(this).attr("src",newSource);
    },
    function(){
        $(this).attr("src",temp);
    })
});
