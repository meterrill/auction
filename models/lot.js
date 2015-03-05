Terrills.Lot = DS.Model.extend({
  year: DS.attr(),
  make: DS.attr(),
  modelName: DS.attr(),
  estimatedValueLow: DS.attr(),
  estimatedValueHigh: DS.attr(),
  photoUrl: DS.attr(),
  auction: DS.belongsTo('auction', {async: true})
});
