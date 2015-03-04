Terrills.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        year: this.get('year'),
        make: this.get('make'),
        model: this.get('model'),
        estimatedValueLow: this.get('estimatedValueLow'),
        estimatedValueHigh: this.get('estimatedValueHigh')
      });
      newLot.save();
      this.transitionToRoute('auction');
    }
  }
});
