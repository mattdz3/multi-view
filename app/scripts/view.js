"use strict";

var PhotoView = Backbone.View.extend({
	
	className: "list-one",

	template: _.template($('.image-template').text()),

	events: {

		'click .move-to-left'  : 'moveLeft',
		'click .delete'        : 'deleteButton',
		'click .move-to-right' : 'moveRight' 
	},

	initialize: function(options) {
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'change', this.render);

		this.$container = options.container

		this.$container.append(this.el);
		this.render();

		// console.log('HI, my model is', this.model)
	},

	render: function() {
		var renderTemp = this.template(this.model.attributes)
		this.$el.html(renderTemp);
		return this;
	},

	deleteButton: function() {
		console.log(this.model)
		this.model.destroy();
	},

	moveRight: function(){

		var index = _.indexOf(collectionsArray, this.model.collection);
		console.log('hot damn', index)
		if (index + 1 >= collectionsArray.length){
			collectionsArray[0].add(this.model)
			console.log('what?')
		} else {
			collectionsArray[index + 1].add(this.model)
		}
	},


})
