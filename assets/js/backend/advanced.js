define(['jquery', 'bootstrap', 'bootstrap-select', 'select2', 'bootstrap-datetimepicker', 'icheck','form'], function ($, undefined,undefined,undefined,undefined,undefined,Form) {
	var Controller = {
		index: function () {
			$('.selectpicker').each(function () {
				$(this).selectpicker()
			});
			$('.select2').each(function () {
				$(this).select2()
			});
			$('#datepicker').datetimepicker({
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
			Controller.api.bindevent();
		},
		api: {
			bindevent: function () {
				Form.api.bindevent($("form[role=form]"));
			}
		}
	}
	return Controller

})