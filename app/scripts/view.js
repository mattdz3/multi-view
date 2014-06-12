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

		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'change', this.render);

		$('.container-left').append(this.el);
		this.render();
	},

	render: function() {

		var renderTemp = this.template(this.model.attributes)
		this.$el.html(renderTemp);
		return this;
	},

	moveRight: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/MD2-photos', {
        	url: this.model.attributes.url,
    	});

    	this.model.destroy().done(function(){
	      	$('.right-images').html('');
	      	$('.right-images').append('');
	      	var route = new MyRouter;
	    })
	},

	moveLeft: function() {
			$.post('http://tiny-pizza-server.herokuapp.com/collections/photos', {
        	url: this.model.attributes.url,
    	});

    	this.model.destroy().done(function(){
	      	$('.left-images').html('');
	      	$('.left-images').append('');
	      	var route = new MyRouter;
	    })
	},

	moveMid: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/MD-photos', {
        	url: this.model.attributes.url,
    	});

    	this.model.destroy().done(function(){
	      	$('.middle-images').html('');
	      	$('.middle-images').append('');
	      	var route = new MyRouter;
	    })
	},

})

//////////////////////////////////////////////////////////

var RightView = Backbone.View.extend({
	
	className: "list-one",

	template: _.template($('.right-images').text()),


	events: {

		'click .move-to-left'  : 'moveLeft',
		'click .move-to-mid'   : 'moveMid',
		'click .move-to-right' : 'moveRight' 
	},

	initialize: function() {

		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'change', this.change);

		$('.container-right').append(this.el);
		this.render();
	},

	render: function() {

		var renderTemp = this.template(this.model.attributes)
		this.$el.html(renderTemp);
		return this;
	},

	moveRight: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/MD2-photos', {
        	url: this.model.attributes.url,
    	});

    	this.model.destroy().done(function(){
	      	$('.right-images').html('');
	      	$('.right-images').append('');
	      	var route = new MyRouter;
	    })
	},

	moveLeft: function() {
			$.post('http://tiny-pizza-server.herokuapp.com/collections/photos', {
        	url: this.model.attributes.url,
    	});

    	this.model.destroy().done(function(){
	      	$('.left-images').html('');
	      	$('.left-images').append('');
	      	var route = new MyRouter;
	    })
	},

	moveMid: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/MD-photos', {
        	url: this.model.attributes.url,
    	});

    	this.model.destroy().done(function(){
	      	$('.middle-images').html('');
	      	$('.middle-images').append('');
	      	var route = new MyRouter;
	    })
	},

})

/////////////////////////////////////////////////////////////////

var MidView = Backbone.View.extend({
	
	className: "list-one",

	template: _.template($('.middle-images').text()),


	events: {

		'click .move-to-left'  : 'moveLeft',
		'click .move-to-mid'   : 'moveMid',
		'click .move-to-right' : 'moveRight' 
	},

	initialize: function() {

		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'change', this.change);

		$('.container-middle').append(this.el);
		this.render();
	},

	render: function() {

		var renderTemp = this.template(this.model.attributes)
		this.$el.html(renderTemp);
		return this;
	},

	moveRight: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/MD2-photos', {
        	url: this.model.attributes.url,
    	});

    	this.model.destroy().done(function(){
	      	$('.right-images').html('');
	      	$('.right-images').append('');
	      	var route = new MyRouter;
	    })
	},

	moveLeft: function() {
			$.post('http://tiny-pizza-server.herokuapp.com/collections/photos', {
        	url: this.model.attributes.url,
    	});

    	this.model.destroy().done(function(){
	      	$('.left-images').html('');
	      	$('.left-images').append('');
	      	var route = new MyRouter;
	    })
	},

	moveMid: function() {
		$.post('http://tiny-pizza-server.herokuapp.com/collections/MD-photos', {
        	url: this.model.attributes.url,
    	});

    	this.model.destroy().done(function(){
	      	$('.middle-images').html('');
	      	$('.middle-images').append('');
	      	var route = new MyRouter;
	    })
	},

})



