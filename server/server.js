Accounts.onCreateUser(function(options,user){
	var accessToken = user.services.facebook.accessToken,
		result,profile;
	result = Meteor.http.get("https://graph.facebook.com/me", {
		params: {
			access_token: user.services.facebook.accessToken,
			fields: 'picture'
		}
	});

	if (result.error) {
		throw result.error;
	}
	if (options.profile){
		options.profile.picture_url = result.data.picture.data.url;
		user.profile = options.profile;
	}
    return user;
});