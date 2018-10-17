const PubSub = require('../helpers/pub_sub.js')

// step1 get data from instrument_data and save it in variable
const InstrumentFamilies = function(data) {
  this.data = data;
};

// step4 - publish the data received from instrument_data
InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('InstrumentFamilies:all-instruments-ready', this.instrumentFamilies);

  // step9
  // PubSub.subscribe('SelectView:index of instrument selected', (event) => {
  //   const selectedIndex = eventt.detail;
  //   this.publishInstrumentDetail(selectedIndex);
  // });

};




module.exports = InstrumentFamilies;
