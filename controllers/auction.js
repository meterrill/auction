Terrills.AuctionController = Ember.ObjectController.extend({
  actions: {

    deleteLot: function(lot) {
      if(confirm("Are you sure?")) {
        var auction = this.get('model');
        auction.get('lots').removeObject(lot);
        auction.save();
        lot.destroyRecord();
      }
    }
  }
});
