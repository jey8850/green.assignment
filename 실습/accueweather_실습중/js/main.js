/* 지도 호출 */
var map = new Map();
map.getKakaoMap();

/* 날씨 호출 */
var forecast = new Forecast();
var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];

/* 중요!! 원래는 한번씩 호출하는것보다 한꺼번에 정보를 불러오는게 좋다.
백엔드 서버 접속은 최대한 자주 안할수록 좋음.
https://openweathermap.org/current 사이트에 여러지역을 한꺼번에 불러오는 방법도 있으므로
우선 한지역만 불러오는 방식을 이용해 아래와 같이 코딩
*/

$(function() {
    $(".temp").each(function(i) {
        $(this).text(forecast.getCurrentTemp(cityList[i])+"℃");
    });

    $(".location").on({
        "click" : function() {
            var q = $(this).children(".q").attr("id");
            var redirectURL = "pages/weather_location.html?q=" + q;
            location.href = redirectURL;
        }
    });
});