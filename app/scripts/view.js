"use strict";

var MainView = Backbone.View.extend({
	
	className: "list-one",

	template: _.template($('.left-images').text()),

	events: {

	},

	initialize: function() {

		$('.left-container').append(this.el)
		this.render();
	},

	render: function() {

		var renderTemp = this.template(this.model.attributes)
		this.$el.html(renderTemp);
		return this;
	},

})

