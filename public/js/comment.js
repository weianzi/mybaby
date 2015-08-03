$(function() {

	$('#commentSubmit > button').on('click', function() {

		var comment = {
			commentBaby: $('#commentBaby').val(),
			commentFrom: $('#commentFrom').val(),
			commentContent: $('#commentContent').val(),
			commentId: $('#commentId').val(),
			toId: $('#toId').val()
		};
		//console.log(comment);
		$.ajax({
			type: 'POST',
			url: '/user/comment',
			data: comment,
			success: function(results) {
				if (results.success === 1) {
					//console.log('评论成功');
					window.location.reload();
				}
			}
		})
	});

	$('.reply_this').on('click', function () {
		var commentId = $(this).data('cid');
		var toId = $(this).data('tid');

		if($('#toId').length > 0){
			$('#toId').val(toId);
		}
		else {
			$('<input id="toId" type="hidden" value='+ toId +' />')
			.appendTo('#commentSubmit');
		}

		if($('#commentId').length > 0){
			$('#commentId').val(commentId);
		}
		else {
			$('<input id="commentId" type="hidden" value='+ commentId +' />')
			.appendTo('#commentSubmit');
		}


	});

})