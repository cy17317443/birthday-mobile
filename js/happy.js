function parseQueryString(url) { // url参数转对象
    var url = url == null ? window.location.href : url,
        search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(`{"${decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`)
}
$(function () {
    let name =  parseQueryString(window.location.href).userName
    $('#name').text(name)
    setTimeout(function () {
        $('.name').animate({
            opacity:"1",
            top:"15%"
        },2000);

    },6000);
    setTimeout(function () {
        $('.happy').animate({
            opacity:"1",
            top:"15%"
        },2000);

    },6000);
    setTimeout(function () {
        $('.button-style1').animate({
            opacity:"1",
            top:"70%"
        },1500);
        $('.button-style2').animate({
            opacity:"1",
            top:"85%"
        },2000);
    },9000);
	// $(window).click(function(){
	// 	$('audio')[0].play();
	// });
	// window.audio=$('audio')[0].play();
})