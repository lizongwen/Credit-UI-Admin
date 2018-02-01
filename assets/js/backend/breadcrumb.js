define(['jquery', 'bootstrap', 'bootstrap-breadcrumb'], function ($, undefined, undefined) {
	var Controller = {
		index: function () {
			// 初始化面包屑
			var breadcrumb = $('#my-breadcrumb').breadcrumb({
				breadcrumbs: [{
					text: 'Home'
				}, {
					text: 'Library'
				}, {
					text: 'data'
				}]
			});
			// 绑定面包屑改变事件
			$('#my-breadcrumb').on('change', function (el, path) {
				console.log(path)
			})

			var breadcrumb = $('#my-breadcrumb1').breadcrumb({
				breadcrumbs: [{
					text: 'Home', icon: 'fa fa-home'
				}, {
					text: 'Library', icon: 'fa fa-inbox'
				}, {
					text: 'data', icon: 'fa fa-calculator '
				}]
			});

			var breadcrumb = $('#my-breadcrumb2').breadcrumb({
				breadcrumbs: [{
					text: 'Home'
				}, {
					text: 'Library'
				}, {
					text: 'data'
				}],
				separator: 'separator-arrow'
			});
		}
	}
	return Controller

})