"use strict";

var Model = Backbone.Model.extend({

	attribute: "_id",

	defaults: {
		url: ""
	},

	initialize: function() {
		this.on('change', function() {

		})
	},

})

var LeftCollection = Backbone.Collection.extend({

model: Model,

url: 'http://tiny-pizza-server.herokuapp.com/collections/photos'

})

var MiddleCollection = Backbone.Collection.extend({

	model: Model,

	url: 'http://tiny-pizza-server.herokuapp.com/collections/MD-photos'

})

var RightCollection = Backbone.Collection.extend({

	model: Model,

	url: 'http://tiny-pizza-server.herokuapp.com/collections/MD2-photos'
})