$(function() {

	//录入 对应页面admin-add.jade
	// $('#submitBabyAdd').click(function() {

	// 	var oFormData = new FormData();
	// 	oFormData.append('file', $('#uploadImg')[0].files[0]);

	// 	var baby = {
	// 		_id: $('#babyId').val(),
	// 		title: $('#inputTitle').val(),
	// 		name: $('#inputName').val(),
	// 		old: $('#inputOld').val(),
	// 		img: $('#inputImg').val(),
	// 		uploadImg: oFormData,
	// 		summary: $('#inputSummary').val()
	// 	}
	// 	//console.log(baby);
	// 	$.ajax({
	// 		type: 'POST',
	// 		url: '/admin/baby/save',
	// 		data: baby,
	// 		success: function(results) {
	// 			if (results.success === 1) {
	// 				alert('录入成功');
	// 			}
	// 		}
	// 	})

	// });


	//删除baby信息
	$('.del-baby').click(function(event) {
		var target = $(event.target);
		var id = target.data('id');
		var tr = $('.item-id-' + id);

		$.ajax({
			type: 'DELETE',
			url: '/admin/baby/list?id=' + id,
			success: function(results) {
				if (results.success === 1) {
					if (tr.length > 0) {
						tr.remove();
						window.location.reload();
					}
				}
			},
			error: function(xhr, status, err) {
				console.error(status, err.toString());
			}
		})

	});


	//删除用户
	$('.del-user').click(function(event) {
		var target = $(event.target);
		var id = target.data('id');
		var tr = $('.item-id-' + id);

		$.ajax({
			type: 'DELETE',
			url: '/admin/userlist?id=' + id,
			success: function(results) {
				if (results.success === 1) {
					if (tr.length > 0) {
						tr.remove();
						window.location.reload();
					}
				}
			},
			error: function(xhr, status, err) {
				console.error(status, err.toString());
			}
		})
	})

})