$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(pwd=="5201314"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href=`BirthdayCake.html?userName=${userName}`;},2000);
		}
	else{
		alert("Wrong Password");
	}
});
