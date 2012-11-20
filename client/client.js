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
Template.container.tournaments = function() {
  return Tournaments.find({}, {sort: {score: -1, name: 1}});
};
Template.comboTournaments.tournaments = function() {
  return Tournaments.find({}, {sort: {score: -1, name: 1}});
};

Template.clubForm.events({
  'click button' :function(e) {
    e.preventDefault();
    var obj = u.getFormValues('clubForm');
    Clubs.insert({nombre:obj.nombre,torneo:obj.torneo,logo:this.links.large_thumbnail});
    
  },
  'click #logobtn' :function(e) {
    $('#logoFile').click();
  },
  'change #logoFile' :function(e) {
    var input = $('#logoFile');
    var callback = function(links) {
      console.log('cargado!!!');
      this.links = links;
    };
    u.upload(input[0].files[0],callback);
  }
});
Template.tournamentForm.events({
  'click button' :function(e) {
    e.preventDefault();
    var obj = u.getFormValues('tournamentForm');
    Tournaments.insert({nombre:obj.nombre,descripcion:obj.descripcion,logo:this.links.large_thumbnail});
  },
  'click #t-logobtn' :function(e) {
    $('#t-logoFile').click();
  },
  'change #t-logoFile' :function(e) {
    var input = $('#t-logoFile');
    var callback = function(links) {
      console.log('cargado!!!');
      this.links = links;
    };
    u.upload(input[0].files[0],callback);
  }
});

//eliminar equipo
  Template.club.events({
    'click button' :function() {
      Clubs.remove( { _id : this._id });
    }
  });

