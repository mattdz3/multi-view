"use strict";

var leftPhotos = new LeftCollection();
var midPhotos = new MiddleCollection();
var rightPhotos = new RightCollection();

var LeftView = Backbone.View.extend({
	
	className: "list-one",

	template: _.template($('.left-images').text()),

	events: {

		'click .move-to-left'  : 'moveLeft',
		'click .move-to-mid'   : 'moveMid',
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

	moveRight: function() {
		this.model.destroy();
		this.remove();

		rightPhotos.add(this.$el.get({ model: 'url' }))
		$('.container-right').append(this.el)

		var renderTemp = this.rightTemp(this.model.attributes)
		this.$el.html(renderTemp);


	},

	// moveLeft: function() {
	// 	this.model.destroy();
	// 	this.remove();
	// },

	// moveMid: function() {
	// 	this.model.destroy();
	// 	this.remove();
	// },

})

var RightView = Backbone.View.extend({
	
	className: "list-one",

	template: _.template($('.right-images').text()),


	events: {

		'click .move-to-left'  : 'moveLeft',
		'click .move-to-mid'   : 'moveMid',
		'click .move-to-right' : 'moveRight' 
	},

	initialize: function() {

		$('.container-right').append(this.el);
		this.render();
	},

	render: function() {

		var renderTemp = this.template(this.model.attributes)
		this.$el.html(renderTemp);
		return this;
	},

	moveRight: function() {
		this.model.destroy();
		this.remove();

		rightPhotos.add(this.el.get({ model: 'url' }))
		$('.container-right').append(this.el)

	},

	// moveLeft: function() {
	// 	this.model.destroy();
	// 	this.remove();
	// },

	// moveMid: function() {
	// 	this.model.destroy();
	// 	this.remove();
	// },

})

var MidView = Backbone.View.extend({
	
	className: "list-one",

	template: _.template($('.middle-images').text()),


	events: {

		'click .move-to-left'  : 'moveLeft',
		'click .move-to-mid'   : 'moveMid',
		'click .move-to-right' : 'moveRight' 
	},

	initialize: function() {

		$('.container-middle').append(this.el);
		this.render();
	},

	render: function() {

		var renderTemp = this.template(this.model.attributes)
		this.$el.html(renderTemp);
		return this;
	},

	moveRight: function() {
		this.model.destroy();
		this.remove();

		rightPhotos.add(this.$el.get({ model: 'url' }))
		$('.container-right').append(this.el)

	


	},

	// moveLeft: function() {
	// 	this.model.destroy();
	// 	this.remove();
	// },

	// moveMid: function() {
	// 	this.model.destroy();
	// 	this.remove();
	// },

})

