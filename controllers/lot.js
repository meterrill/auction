Terrills.LotController = Ember.ObjectController.extend({
  detailsShowing: false,
  actions: {
    showDetails: function() {
      this.set('detailsShowing', !this.get('detailsShowing'));
    },

    delete: function() {
      if(confirm('Are you sure?')) {
        this.get('model').destroyRecord();
      }
    }
  }
});
