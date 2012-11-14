Template.toolbar.events({   
  /**
   * Whe the user clicks on a menu option
   * @param  {Object} e   The event object
   * @param  {Object} obj the node object action
   * @return {Boolean}     always true
   */
  'click li' : function (e,obj) {
	e.preventDefault();
	$(this).tab('show');
  }
});

Template.container.users = function() {
	//return Users.find({}, {sort: {score: -1, name: 1}});
};
Template.container.clubs = function() {
	return Clubs.find({}, {sort: {score: -1, name: 1}});
};
Template.container.matches = function() {
	return Matches.find({}, {sort: {score: -1, name: 1}});
};
Template.container.prices = function() {
	return Prices.find({}, {sort: {score: -1, name: 1}});
};