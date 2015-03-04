Terrills.NewAuctionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newAuction = this.store.createRecord('auction', {
        name: this.get('name'),
        date: this.get('date'),
        location: this.get('location'),
      });
      newAuction.save();
      this.transitionToRoute('auctions');
    }
  }
});
