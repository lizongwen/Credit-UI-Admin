define(['jquery', 'bootstrap', 'bootstrap-select', 'smartcomplete'], function ($, undefined, undefined, smartComplete) {
	var Controller = {
		index: function () {
			$("#search").smartComplete({
				url: "../../data/result.json",  //服务端地址，此处我们使用JSON来模拟数据
				ulClass: "abc"
			});
		}
	}
	return Controller

})