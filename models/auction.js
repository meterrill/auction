Terrills.Auction = DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  location: DS.attr(),
  lots: DS.hasMany('lot', {async: true})
});
