
const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container
}

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:selected-instrument-family-ready', (event) => {
    const instrumentFamily = event.detail;
    this.render(instrumentFamily);
  });
};
