// 객체 선언

function Forecast() {
    this.url = "http://api.openweathermap.org/data/2.5/weather";
    this.url += "?units"+"metric";
    this.url += "&lang="+"kr";
    this.url += ;
}

Forecast.prototype.getCurrentWeather = function(city) {
    var dataObj;
    var openWeatherAPI = this.url; //q가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다

    $.ajax({
        type: "GET",
        url: openWeatherAPI += city,
        dataType: "json",
        async: false,
        success:function(data) {
            dataObj = data;
        },
        error:function(request,status,error) {
            console.log("code:"+request.status+"\n"+"message:"+request.responseText);
        },
        complete:function(data,textStatus) {
            //작업 완료 후 처리
            
        }
    });
}

$ (function(){
    var gnv=false;
    var gnbIndex;

    $(".nav li").on ({
        "mouseenter" : function() {
            // lnb show
            if (gnbIndex |= undefined) {
                $(".lnb").eq(gnbIndex).css("display","none");
            }
            gnbIndex = $(this).index();
            gnbFlag =true;

            $(".lnb_container").removeClass("disappear");
            $(".lnb_container").addClass("appear");
            $(".lnb_container").show();

            $(".lnb").eq(gnbIndex).css("display","block");

            //액티브 바 show
                $(".active_bar").show();

            //선택된 li의 left와 width를 구해 acrive_bar의 위치와 길이를 조절한다

            var listLeft = $(this).offset().left;
            var listWidth = $(this).width();

            $(".active_bar").width(listWidth);

            //li에 padding이 있었으므로 17을 더 더해준다.
            $(".active_bar").offset({left: listLeft + 17});
        }
    });

    //하위 메뉴 안보이게 하기

    $(".lnb_container").on({
        "mouseleave" : function {
            if(gnbFlag) {
                $(".lnb_container").removeClass("appear");
                $(".lnb_container").addClass("disappear");
                $(".lnb_container").hide();
                $(".active_bar").hide();
            } else {
                return;
            }
        }
    });

    //모바일 햄버거 메뉴 클ㅣ

        "click" : function() {
            //햄버거 메뉴 버튼이 보일때
            if ($(".mobile.hamburger").is(":visible") {
                //모바일 닫기 버튼 show
                $(".mobile.hamburger").hide();
                $(".mobile.close").show();

                //모바일 전체 메뉴 show

                $("#main_header").height(60);
                $("#main_content").hide();
                $("#main_footer").hide();

                $("#mobile_menu").empty();
                $("li").eq(3).show();
                $("li").eq(4).show();

                var nav = $(".nav").clone();
                $("mobile_menu").append(nav);
                $("mobile_menu").show();
                
            } else { //닫기 메뉴 버튼이 보일때

                $(".mobile.hamburger").show();
                $(".mobile.close").hide();

                //모바일 전체 메뉴 show

                $("#main_header").height(390);
                $("#main_content").show();
                $("#main_footer").show();
                $("#mobile_menu").hide();
            }); 
        }
});

// 사이즈 증가 했을때 li에서 '개인화된 예보', '설정' 메뉴는 안보이게 함

$(window).resize(function() {
    var width = $(window).width();

    if(width > 767) {
        $("li").eq(3).hide();
        $("li").eq(4).hide();

        if($("#mobile.menu").is(":visible")) {
            $(".mobile.hamburger").show();
            $(".mobile.close").hide();

            $("#main_header").height(390);
            $("#main_content").show();
            $("#main_footer").show();

            $("#mobile_menu").hide();

        }
    }
})

