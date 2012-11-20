/**
 * Este es el objeto utiliario de la appp
 * @type {Object}
 */
var utils = {
	log: function(obj) {
		if(typeof console !== 'undefined') {
			console.log(obj);
		}
	},
	getFormValues: function(id) {
		// get all the inputs into an array.
		var $inputs = $('#' + id + ' :input'),
			values = {};
		$inputs.each(function() {
			values[this.name] = $(this).val();
		});
		return values;
	},
	upload: function(file,callback) {
		// file is from a <input> tag or from Drag'n Drop
		// Is the file an image?
		if(!file || !file.type.match(/image.*/)) return;

		// It is!
		// Let's build a FormData object
		var fd = new FormData();
		fd.append("image", file); // Append the file
		fd.append("key", "a4c3b38ee3fd904669addc69b21a39c2"); // Get your own key: http://api.imgur.com/
		// Create the XHR (Cross-Domain XHR FTW!!!)
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://api.imgur.com/2/upload.json"); // Boooom!
		xhr.onload = function() {
			callback(JSON.parse(xhr.responseText).upload.links);
		};

		// Ok, I don't handle the errors. An exercice for the reader.
		// And now, we send the formdata
		xhr.send(fd);
	}
};
var global = this;
var u = utils;