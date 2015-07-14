$(function() {

	//录入 对应页面admin-add.jade
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
			success: function(results) {
				if (results.scccess == 1) {
					console.log("success");
				}
			},
			error: function() {}
		});

	});


	//删除
	$(".del").click(function(event) {
		var target = $(event.target);
		var id = target.data("id");
		var tr = $(".item-id-" + id);

		$.ajax({
			type: "DELETE",
			url: "/admin/baby/list?id=" + id,
			success: function(results) {
				if (results.success == 1) {
					if (tr.length > 0) {
						tr.remove();
					}
				}
			},
			error: function(xhr, status, err) {
				console.error(status, err.toString());
			}
		});

	});


})