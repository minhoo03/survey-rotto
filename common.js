window.onload = function () {

    var ran_num = $('.random_number');

    for (var i = 0; i < ran_num.length; i++) {
        ran_num[i].value = Math.ceil(Math.random() * 45);
    }

    $(".re").click(function(){
        for (var i = 0; i < ran_num.length; i++) {
            ran_num[i].value = Math.ceil(Math.random() * 45);
        }
    })
}
/*
function blackPan(){
    $(".blackpan").click(function(){
        $(".rotto-box input").css({"background":"white"})
    })
}
*/
function blackPan(){
    $(".blackpan").click(function(){
        $(".rotto-box input").css({"background":"white"})
    })
}

$(document).ready(blackPan)