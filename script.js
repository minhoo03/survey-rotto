function fade() { //container 의 내용이 1초 동안 나타남
    $('.container').css('display', 'none');
    $('.container').fadeIn(1000);

    setTimeout(() => { //h1와 p 가 1초 뒤에 1.5초간 나타남
        $('.index-box h1,p').fadeIn(1500);
    }, 1000)

    setTimeout(() => {
        $('.index-box button').fadeIn(1000);
    }, 1400)
}

function slide() {
    var box = $('.container')
    var cnt = 0;

    $('button').click(function slide() {

        $(box[cnt]).animate({ "top": "-100%" })
        cnt++;
        $(box[cnt]).animate({ "top": 0 });
    })
}

var y_cnt = 0;
var n_cnt = 0;
//yes 클릭시에 y_cnt++ / no 클릭시에 n_cnt++  - 그리고 compare 함수에 보내주고 compare 가 실행된다 / 비동기식이기에 콜백 사용
function values() {
    $('.yes').click(function () {
        y_cnt += 1;
        compare();
    })

    $('.no').click(function () {
        n_cnt += 1;
        compare();
    })

}
//예, 아니오 갯수로 클래스를 주고 빼았음
function compare() {
    if (y_cnt>n_cnt) {//예가 많을 경우 2번째에게 hidden 클래스를 주기 - display:none;
        $('.finish:nth-child(2)').addClass('hidden').siblings().removeClass('hidden');
    } else if (y_cnt<n_cnt) {
        $('.finish:nth-child(1)').addClass('hidden').siblings().removeClass('hidden');
    }
}


/*
function selectTest(){
    $(".select1").click(function(){
        $(".container1").addClass('hidden')
    })

    $(".select2").click(function(){
        $(".container2").addClass('hidden')
    })
}
*/
function selectTest(){ //test 2 를 눌렀을 경우 test 1의 내용을 전부 건너뛸 수 있게 top:0; 을 해줌
    $(".select2").click(function(){
        $("#bok").animate({"top":"0"})
    })
}


$(document).ready(fade)
$(document).ready(slide)
$(document).ready(values)
$(document).ready(selectTest)