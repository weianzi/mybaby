$(function() {

	$('.search_open').on('click', function(e) {
		if ($('#container').hasClass('pull')) {
			$('#container,#user,#header').removeClass('pull');
		} else {
			$('#container,#user,#header').addClass('pull');
		}
	});


	$('#reg_now').on('click', function() {
		$('#signinBox').hide();
		$('#signupBox').show();
	});


	$('#login_now').on('click', function() {
		$('#signinBox').show();
		$('#signupBox').hide();
	});


	//注册
	$('#signupSubmit').on('click', function() {

		var user = {
			signupName: $('#signupName').val(),
			signupPassword: $('#signupPassword').val()
		};

		if(!user.signupName || !user.signupPassword){
			alert('用户或密码不能为空');
			return;
		}

		$.ajax({
			type: 'POST',
			url: '/user/signup',
			data: user,
			success: function(results) {
				if(results.success === 1){
					console.log('注册成功');
					window.location.reload();
				} else if(results.success === 0) {
					alert("该用户名已被注册")
				}
			}
		})

	});


	//登录
	$('#signinSubmit').on('click', function() {

		var user = {
			signinName: $('#signinName').val(),
			signinPassword: $('#signinPassword').val()
		};

		$.ajax({
			type: 'POST',
			url: '/user/signin',
			data: user,
			success: function(results) {
				if(results.success === 1){
					console.log('登录成功');
					window.location.reload();
				} else if(results.success === -1) {
					alert("用户名不存在");
				} else{
					alert("密码错误");
				}
			}
		})

	});



});