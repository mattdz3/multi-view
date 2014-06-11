"use strict";

var MainView = Backbone.View.extend({
	
	className: "list-one",

	

	template: _.template($('.left-images').text()),

	events: {

		'click .move-to-left' : 'moveLeft',
		'click .move-to-mid' : 'moveMid',
		'click .move-to-right' : 'moveRight'	 
	},

	initialize: function() {

		$('.container-left').append(this.el);
		this.render();
	},

	render: function() {

		var renderTemp = this.template(this.model.attributes)
		this.$el.html(renderTemp);
		return this;
	},

	deletePhoto: function() {
		this.model.destroy();
		this.remove();
	},


})


