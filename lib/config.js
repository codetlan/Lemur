if(Meteor.isClient) {
	Accounts.ui.config({
		requestPermissions: {
			facebook: ['email','read_friendlists','user_about_me']
		}
		//passwordSignupFields: 'USERNAME_AND_EMAIL'
	});
}