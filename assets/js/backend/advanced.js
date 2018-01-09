define(['jquery', 'bootstrap', 'bootstrap-select', 'select2', 'bootstrap-datetimepicker', 'icheck','plupload'], function ($, undefined,undefined,undefined,undefined,undefined,Plupload) {
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

			// 上传控件
			//实例化一个plupload上传对象
			// var uploader = new plupload.Uploader({
			// 	browse_button : 'browse', //触发文件选择对话框的按钮，为那个元素id
			// 	url : 'upload.php', //服务器端的上传页面地址
			// 	flash_swf_url : 'js/Moxie.swf', //swf文件，当需要使用swf方式进行上传时需要配置该参数
			// 	silverlight_xap_url : 'js/Moxie.xap' //silverlight文件，当需要使用silverlight方式进行上传时需要配置该参数
			// });    
		
			// //在实例对象上调用init()方法进行初始化
			// uploader.init();
		
			// //绑定各种事件，并在事件监听函数中做你想做的事
			// uploader.bind('FilesAdded',function(uploader,files){
			// 	//每个事件监听函数都会传入一些很有用的参数，
			// 	//我们可以利用这些参数提供的信息来做比如更新UI，提示上传进度等操作
			// });
			// uploader.bind('UploadProgress',function(uploader,file){
			// 	//每个事件监听函数都会传入一些很有用的参数，
			// 	//我们可以利用这些参数提供的信息来做比如更新UI，提示上传进度等操作
			// });
			// //......
			// //......
		
			// //最后给"开始上传"按钮注册事件
			// document.getElementById('start_upload').onclick = function(){
			// 	uploader.start(); //调用实例对象的start()方法开始上传文件，当然你也可以在其他地方调用该方法
			// }
		}
	}
	return Controller

})