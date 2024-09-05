$(document).ready(function(){
	$(".submenu, .submenu_wrap").hide();
	$(".gnb > li > a").mouseenter(function(){
		$(".submenu").stop().slideDown();
		$(".submenu_wrap").stop().slideDown();
	});
	$(".submenu").mouseleave(function(){
		$(".submenu, .submenu_wrap").stop().slideUp();
	});
});

$(document).ready(function () {
    const $boxWrap = $(".box_wrap_wrap");
    const $popular = $(".popular");
    
    // 첫 번째 popular 요소를 복제하여 맨 뒤에 추가
    $(".box_wrap_wrap").append($(".box_wrap_wrap").first().clone(true));
    
    let currentIndex = 0; // 현재 슬라이드 인덱스
    const slideWidth = 100; // 슬라이드할 너비(px)

    // 슬라이드 함수 정의
    function slideLeft() {
        // 현재 위치에서 슬라이드
        $boxWrap.animate({ marginLeft: `-=845px` }, 1000, function () {
            currentIndex++;
            if (currentIndex === $popular.length) {
                $boxWrap.css("margin-left", "0");
                currentIndex = 0;
            }
        });
    }

    // popular 박스를 클릭할 때 슬라이드 실행
    $popular.click(function () {
        slideLeft();
    });
});