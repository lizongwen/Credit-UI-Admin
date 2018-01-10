define(['jquery', 'bootstrap', 'form'], function ($, undefined,Form) {
	var Controller = {
		index: function () {
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