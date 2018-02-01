define(['jquery', 'bootstrap', 'bootstrap-breadcrumb'], function ($, undefined, undefined) {
	var Controller = {
		index: function () {
			// 初始化面包屑
			var breadcrumb = $('#my-breadcrumb').breadcrumb();
			breadcrumb.push({text: 'Home'})
			breadcrumb.push({text: 'Library'})
			breadcrumb.push({text: 'data'})
			
			var breadcrumb = $('#my-breadcrumb1').breadcrumb();
			breadcrumb.push({text: 'Home',icon: 'fa fa-home'})
			breadcrumb.push({text: 'Library', icon: 'fa fa-inbox'})
			breadcrumb.push({text: 'data',icon: 'fa fa-calculator '})
			
			var breadcrumb = $('#my-breadcrumb2').breadcrumb({separator: 'separator-arrow'});
			breadcrumb.push({text: 'Home'})
			breadcrumb.push({text: 'Library'})
			breadcrumb.push({text: 'data'})

			var breadcrumb = $('#my-breadcrum3').breadcrumb({separator: 'separator-arrow'});
			breadcrumb.push({text: 'Home',icon: 'fa fa-home'})
			breadcrumb.push({text: 'Library', icon: 'fa fa-inbox'})
			breadcrumb.push({text: 'data',icon: 'fa fa-calculator '})

			// 绑定面包屑改变事件
			// $('#my-breadcrumb').on('change', function (el, path) {
			// 	console.log(path)
			// })
		}
	}
	return Controller

})