Terrills.Router.map(function() {
  this.resource('auctions', {path: '/'});
  this.resource('new-auction');
  this.resource('auction');
  this.resource('new-lot');
});
