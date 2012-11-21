Template.comboClubs.clubs = function() {
  return Clubs.find({}, {sort: {score: -1, name: 1}});
};

Template.clubForm.events({
  'click button': function(e) {
    e.preventDefault();
    var obj = u.getFormValues('clubForm');
    Clubs.insert({
      nombre: obj.nombre,
      torneo: obj.torneo,
      logo: this.links.large_thumbnail
    });

  },
  'click #logobtn': function(e) {
    $('#logoFile').click();
  },
  'change #logoFile': function(e) {
    var input = $('#logoFile');
    var callback = function(links) {
        console.log('cargado!!!');
        this.links = links;
      };
    u.upload(input[0].files[0], callback);
  }
});

//eliminar equipo
Template.club.events({
  'click button': function() {
    Clubs.remove({
      _id: this._id
    });
  }
});