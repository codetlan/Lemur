Meteor.startup(function() {
	if ( this.userId) {
		console.log('usuario');
	} else{
		console.log('anonymous');
	};
});