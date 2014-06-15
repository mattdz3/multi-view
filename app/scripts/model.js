"use strict";

var Photo = Backbone.Model.extend({
	idAttribute: "_id",

	defaults: {
		url: ""
	}
});

var PhotoCollection = Backbone.Collection.extend({

	model: Photo,

	initialize: function(options) {
		this.url = options.url;

		this.id = _.uniqueId('collection-');

		this.on('add', function(photo){
			new PhotoView({ 
				model: photo,
				container: $('.' + this.id)
			});
		})
	}
})
