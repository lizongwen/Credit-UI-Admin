define(['jquery', 'bootstrap', 'bootstrap-select', 'select2', 'select2-to-tree', 'bootstrap-datetimepicker', 'icheck', 'form','smartcomplete'], function ($, undefined, undefined, select2, select2ToTree, undefined, undefined, Form) {
	var Controller = {
		index: function () {
			$('.selectpicker').each(function () {
				$(this).selectpicker()
			});
			$('.select2').each(function () {
				$(this).select2()
			});
			$('#datepicker1,#datepicker2').datetimepicker({
				showClose: true,
				format: 'YYYY-MM-DD'
			});

			var $started = $("[name=started]");
			var started = $started.datetimepicker({
				showClose: true,
				format: 'YYYY-MM-DD'
			}).on("dp.change", function (e) {

			});

			var $finished = $("[name=finished]");
			var finished = $finished.datetimepicker({
				showClose: true,
				format: 'YYYY-MM-DD'
			}).on("dp.change", function (e) {

			});
			$('#reservationtime').datetimepicker({
				showClose: true,
				format: 'YYYY-MM',
				viewMode: 'months'
			});
			$("#search").smartComplete({
				url: "../../data/result.json",  //服务端地址，此处我们使用JSON来模拟数据
				ulClass: "abc"
			});
			//iCheck for checkbox and radio inputs
			$('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
				checkboxClass: 'icheckbox_minimal-blue',
				radioClass: 'iradio_minimal-blue'
			})
			//Red color scheme for iCheck
			$('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
				checkboxClass: 'icheckbox_minimal-red',
				radioClass: 'iradio_minimal-red'
			})
			//Flat red color scheme for iCheck
			$('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
				checkboxClass: 'icheckbox_flat-green',
				radioClass: 'iradio_flat-green'
			});

			var mydata = [
				{
					id: 1,
					text: "USA",
					inc: [{
						id: 11,
						text: "west",
						inc: [{
							id: 111,
							text: "California",
							inc: [{
								id: 1111,
								text: "Los Angeles",
								inc: [{ id: 11111, text: "Hollywood" }]
							}, {
								id: 1112,
								text: "San Diego"
							}]
						}, {
							id: 112,
							text: "Oregon"
						}]
					}]
				}, {
					id: 2,
					text: "India"
				}, {
					id: 3,
					text: "中国"
				}
			];
			$("#sel_1").select2ToTree({ treeData: { dataArr: mydata }, maximumSelectionLength: 3 });
			$("#sel_2").select2ToTree({ treeData: { dataArr: mydata }, maximumSelectionLength: 3 });
			Controller.api.bindevent();
		},
		api: {
			bindevent: function () {
				Fast.config.toastr.positionClass = "toast-top-center";
				$("form[role=form2]").data("validator-options", {
					'fields':{
						'username':{
							'rule':'required',
							'msg':'请输入用户名'
						}						
					},
					invalid: function (form, errors) {
						console.log(form,errors)
						alert(122)
						$.each(errors, function (i, j) {
							Toastr.error(j);
						});
					},
					'target': '#errtips'
				});
				Form.api.bindevent($("form[role=form]"));
				Form.api.bindevent($("form[role=form1]"));
				Form.api.bindevent($("form[role=form2]"));
			}
		}
	}
	return Controller

})