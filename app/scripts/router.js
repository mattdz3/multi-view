"use strict";

var location;

var leftPhotos = new LeftCollection();
var midPhotos = new MiddleCollection();
var rightPhotos = new RightCollection();

var MyRouter = Backbone.Router.extend({


	initialize: function() {

		leftPhotos.fetch().done(function() {
			leftPhotos.each(function(photos) {
			
				new LeftView({ model: photos });
			})
		});

		midPhotos.fetch().done(function() {
			midPhotos.each(function(photos) {
			
				new MidView({ model: photos });
			})
		});

		rightPhotos.fetch().done(function() {
			rightPhotos.each(function(photos) {
				
				new RightView({ model: photos });
			})
		});
	},
	
})

