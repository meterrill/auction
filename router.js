Terrills.Router.map(function() {
  this.resource('auctions', {path: '/'});
  this.resource('new-auction');
  this.resource('auction', {path: 'auctions/:auction_id'});
  this.resource('new-lot');
});
