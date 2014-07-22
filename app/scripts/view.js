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
	},

	render: function() {

		var renderTemp = this.template(this.model.attributes)
		this.$el.html(renderTemp);
		return this;
	},

	deleteButton: function() {

		this.model.destroy();
	},

	moveRight: function(){
		// grab the index of the current collection in the collectionsArray
		var index = _.indexOf(collectionsArray, this.model.collection);
		console.log('hot damn', index)

		// if it's already in the rightmost collection, move it 
		// to the first (leftmost) collection
		if (index + 1 >= collectionsArray.length){
			var freshModel = collectionsArray[0].add({url: this.model.attributes.url});
			console.log("AHHHHH!")

		// otherwise move it 1 to the right
		} else {
			var freshModel = collectionsArray[index + 1].add({url: this.model.attributes.url});
		}

		// now save it.
		freshModel.save();
		console.log('freshModel is', freshModel)
		this.model.destroy();
	},

	moveLeft: function() {
		// grab the index of the current collection in the collectionsArray
		var index = _.indexOf(collectionsArray, this.model.collection);
		console.log('hot damn', index)

		// if it's already in the rightmost collection, move it 
		// to the first (leftmost) collection
		if (index - 1 < 0 ){
			var freshModel = collectionsArray.slice(-1).add({url: this.model.attributes.url});
			console.log("AHHHHH!")

		// otherwise move it 1 to the right
		} else {
			var freshModel = collectionsArray[index - 1].add({url: this.model.attributes.url});
		}

		// now save it.
		freshModel.save();
		console.log('freshModel is', freshModel)
		this.model.destroy();
	}
})
