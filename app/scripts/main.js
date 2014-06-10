"use strict";

var leftPhotos = new LeftCollection();

var mainPicView;

var leftPicView;

leftPhotos.fetch().done(function() {
	leftPhotos.each(function(photos) {
		new MainView({model: photos});
	})
	//leftPicView = new MainView({ model: leftPicView.first() })
});


