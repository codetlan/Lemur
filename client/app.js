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
	return Meteor.users.find({}, {sort: {score: -1, name: 1}});
};
Template.clubsView.clubs = function() {
	return Clubs.find({}, {sort: {score: -1, name: 1}});
};
Template.matchesView.matches = function() {
	return Matches.find({}, {sort: {score: -1, name: 1}});
};
Template.pricesView.prices = function() {
	return Prices.find({}, {sort: {score: -1, name: 1}});
};
Template.tournamentsView.tournaments = function() {
  return Tournaments.find({}, {sort: {score: -1, name: 1}});
};


