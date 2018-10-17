const data = require("./data/instrument_data");
const InstrumentFamilies = require("./models/instrument_families");
const Instrument = require("./views/instrument_info_view.js");
const SelectView = require("./views/select_view.js");

document.addEventListener('DOMContentLoaded', () => {

// step3

const instrumentDropDown = new SelectView(selectElement);
// console.log(instrumentDropDown);
instrumentDropDown.bindEvents()
const selectElement = document.querySelector('#instrument-families')



// step2 bind the new instrument family data
  const families = new InstrumentFamilies(data);
  // console.log(families);
  families.bindEvents();

  // console.log(families);

});
