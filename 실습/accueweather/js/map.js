//객체 선언

function Map() {

}

//카카오 맵 로드

Map.prototype.getKakaoMap = function() {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    var mapOption = { 
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
            };
        
        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption); 
};

//Map.prototype