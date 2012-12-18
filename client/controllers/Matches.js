Template.matchForm.events({
  'click button' :function(e) {
    e.preventDefault();
    var obj = u.getFormValues('matchesForm');
    console.log(obj);
    Matches.insert({
      local:obj.local,
      visitante:obj.visitante,
      torneo:obj.torneo,
      jornada:obj.jornada,
      fecha: new Date()
    });
  }
});

//eliminar partidos
Template.match.events({
  'click button': function() {
    Matches.remove({
      _id: this._id
    });
  }
});