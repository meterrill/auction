Terrills.NewAuctionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newAuction = this.store.createRecord('auction', {
        name: this.get('newName'),
        date: this.get('newDate'),
        location: this.get('newLocation'),
      });
      newAuction.save();

      this.set('newName', null);
      this.set('newDate', null);
      this.set('newLocation', null);

      this.transitionToRoute('auctions');
    }
  }
});
