/* ========================================================
 * bootstrap-breadcrumb.js v1.0.0
 * http://jeluard.github.com/bootstrap-breadcrumb/index.html
 * ========================================================
 * Copyright 2011 Julien Eluard, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {
	"use strict"
	var Breadcrumb = function (element, options) {
		this.$element = $(element);
		this.settings = $.extend({}, $.fn.breadcrumb.defaults, options)
	}

	function value(argument, def) {
		return (typeof argument === 'undefined' ? def : argument);
	}

	function extractLabel(element) {
		var undecoratedLabel = $(element).find('span').text()
		return undecoratedLabel;
	}

	function extractPath(elements) {
		var path = new Array()
		for (var i = 0; i < elements.length; i++) {
			path.push(extractLabel(elements[i]));
		}
		return path;
	}

	Breadcrumb.prototype.push = function (breadcrumb) {
		var label=breadcrumb.text;
		var path = extractPath(this.$element.children('li'));
		if (path.length > 0) {
			var last = this.$element.children(':last');
			var previousLabel = extractLabel(last[0]);
			var previousIcon=last.children('.fa').prop('className');
			last.remove();
			breadcrumb.icon?this.$element.append("<li data-breadcrumb-level='" + path.length + "' class='"+this.settings.separator+"'><a href='javascript:;'><i class='"+previousIcon+"'></i><span>" + previousLabel + "</span></a></li>"):this.$element.append("<li data-breadcrumb-level='" + path.length + "' class='"+this.settings.separator+"'><a href='javascript:;'><span>" + previousLabel + "</span></a></li>");
			var local = this;
			this.$element.children('li').filter(':last')[0].firstChild.addEventListener('click', function (e) {
				var index = path.length - 1;
				var iteration = local.$element.children('li').length - index;
				local.pop(iteration);
			}, false);
		}
		path.push(label);
		breadcrumb.icon?this.$element.append("<li data-breadcrumb-level='" + path.length + "' class='active "+this.settings.separator+"'><i class='"+breadcrumb.icon+"'></i><span>" + label + "</span></li>"):this.$element.append("<li data-breadcrumb-level='" + path.length + "' class='active "+this.settings.separator+"'><span>" + label + "</span></li>");
		this.$element.trigger('change', [path]);
	}

	Breadcrumb.prototype.pop = function (iteration) {
		for (var i = 0; i < value(iteration, 1); i++) {
			var last = this.$element.children(':last');
			last.remove();
		}
		var last = this.$element.children(':last');
		var previousLabel = extractLabel(last[0]);
		var previousIcon=last.find('.fa').prop('className');
		last.remove();
		this.$element.append("<li data-breadcrumb-level='" + (this.$element.children().length + 1) + "' class='active'><i class='"+previousIcon+"'></i><span>" + previousLabel + "</span></li>");
		this.$element.trigger('change', [extractPath(this.$element.children('li'))]);
	}

	Breadcrumb.prototype.reset = function () {
		this.$element.children('li').remove()
		this.$element.trigger('change');
	}

	/* BREADCRUMB PLUGIN DEFINITION
	 * ============================ */

	$.fn.breadcrumb = function (options) {
		var breadcrumb=new Breadcrumb(this, options);
		options.breadcrumbs.forEach(item => {
			breadcrumb.push(item)
		});
		

		return breadcrumb;
	}

	$.fn.breadcrumb.defaults = {
		keyboard: false,
		separator:'',
		breadcrumbs:[]
	}

}(window.jQuery || window.ender);
