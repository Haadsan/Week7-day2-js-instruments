const PubSub = require('../helpers/pub_sub.js');

// step6
const SelectView = function(element){
  this.element = element;
  // console.log(this.element);
};

// step5- subscribes to what instrument_inf_view publishes
SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready', (event) => {
    const allInstruments = event.detail;
    // console.log('select view all instruments', allInstruments);
    this.populate(allInstruments);
});

// step 8 add addEventListener to listen to the changes and publish..this is to be dropdown
    this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    // console.log(SelectView: selectedIndex', selectedIndex);
    PubSub.publish('SelectView:index of instrument selected', selectedIndex);
  });
};


// step7- populate the dropdown
  SelectView.prototype.populate = function(instrumentsData){
  //   // console.log(instrumentData);
  //   instrumentsData.forEach((instrument, index) => {
  //     // console.log(instrument, index);
  //     const option = document.createElement('option');
  //     // console.log(option);
  //     option.textContent = instrument.name;
  //     // console.log(instrument.name);
  //     option.value = index;
  //     this.element.appendChild(option);
  //   });
  // };


module.exports = SelectView;
