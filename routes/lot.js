Terrills.LotRoute = Ember.Route.extend({
  model: function(params) {
    this.store.find('lot', params.id);
  }
});
