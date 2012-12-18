Template.priceForm.events({
  'click button' :function(e) {
    e.preventDefault();
    var obj = u.getFormValues('pricesForm');
    Prices.insert({
      nombre:obj.nombre,
      descripcion:obj.descripcion,
      valor:obj.valor,
      precio:obj.precio,
      logo:this.links.large_thumbnail
    });
  },
  'click #p-logobtn' :function(e) {
    $('#t-logoFile').click();
  },
  'change #p-logoFile' :function(e) {
    var input = $('#p-logoFile');
    var callback = function(links) {
      console.log('cargado!!!');
      this.links = links;
    };
    u.upload(input[0].files[0],callback);
  }
});

//eliminar equipo
Template.price.events({
  'click button': function() {
    Prices.remove({
      _id: this._id
    });
  }
});