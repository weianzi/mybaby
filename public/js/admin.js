$(function() {

	$("#submitBabyAdd").click(function() {

		var baby = {
			_id: $("#babyId").val(),
			title: $("#inputTitle").val(),
			name: $("#inputName").val(),
			old: $("#inputOld").val(),
			img: $("#inputImg").val(),
			summary: $("#inputSummary").val()
		};

		$.ajax({
			type: "POST",
			url: "/admin/baby/save",
			data: baby,
			success: function(result) {
				console.log(result);
			},
			error:function(){

		}
		});

	});


})