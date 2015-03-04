Terrills.NewLotController = Ember.ObjectController.extend({
  needs: ['auction'],
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        year: this.get('year'),
        make: this.get('make'),
        modelName: this.get('modelName'),
        estimatedValueLow: this.get('estimatedValueLow'),
        estimatedValueHigh: this.get('estimatedValueHigh')
      });
      newLot.save();
      var auction = this.get('controllers.auction.model');
      auction.get('lots').pushObject(newLot);
      auction.save();

      this.transitionToRoute('auction', auction.id);
    }
  }
});
