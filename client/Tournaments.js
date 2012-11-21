Template.comboTournaments.tournaments = function() {
  return Tournaments.find({}, {sort: {score: -1, name: 1}});
};


Template.tournamentForm.events({
  'click button' :function(e) {
    e.preventDefault();
    var obj = u.getFormValues('tournamentForm');
    Tournaments.insert({
      nombre:obj.nombre,
      descripcion:obj.descripcion,
      logo:this.links.large_thumbnail
    });
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

//eliminar torneo
Template.tournament.events({
  'click button': function() {
    Tournaments.remove({
      _id: this._id
    });
  }
});