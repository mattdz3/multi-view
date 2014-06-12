"use strict";

var collectionsArray = [

	new PhotoCollection({url: 'http://tiny-pizza-server.herokuapp.com/collections/photos'}),
	new PhotoCollection({url: 'http://tiny-pizza-server.herokuapp.com/collections/MD-photos'}),
	new PhotoCollection({url: 'http://tiny-pizza-server.herokuapp.com/collections/MD2-photos'}),
	new PhotoCollection({url: 'http://tiny-pizza-server.herokuapp.com/collections/MD2-photos-MASON-JUSTHACKEDYOURAPP'})
]

collectionsArray.forEach(function (coll) {

	var freshDiv = $('<div></div>')
	freshDiv.addClass(coll.id + ' container');
	$('.collections-container').append(freshDiv);

	freshDiv.html('this is .collection-' + coll.id)
	freshDiv.html('this url' + coll.url)

	coll.fetch();
})


