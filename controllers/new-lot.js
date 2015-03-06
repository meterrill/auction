Terrills.NewLotController = Ember.ObjectController.extend({
  needs: ['auction'],
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        year: this.get('year'),
        make: this.get('make'),
        modelName: this.get('modelName'),
        estimatedValueLow: this.get('estimatedValueLow'),
        estimatedValueHigh: this.get('estimatedValueHigh'),
        photoUrl: this.get('photoUrl')
      });
      newLot.save();


      var auction = this.get('controllers.auction.model');
      auction.get('lots').pushObject(newLot);
      auction.save();
      
      this.set('year', null);
      this.set('make', null);
      this.set('modelName', null);
      this.set('estimatedValueLow', null);
      this.set('estimatedValueHigh', null);
      this.set('photoUrl', null);

      this.transitionToRoute('auction', auction.id);
    }
  }
});
