//url 가져오기
var url = location.href;
console.log(url);

//쿼리스트링 파라메터 가져오기
var urlobj = new URL(url);
var params = urlobj.searchParams;
var q = params.get("q");

console.log(q);

//선택한 지역 전체 데이터 가져오기
var forecast = new Forecast();
var locationWeather = forecast.getCurrentWeather(q);
console.log(locationWeather);