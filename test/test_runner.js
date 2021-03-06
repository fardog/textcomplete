const fs = require('fs');
const path = require('path');
const sinon = require('sinon');
const jsdom = require('jsdom');

// textarea-caret requires window object while bootstraping.
global.window = {};
require('textarea-caret');
delete global.window;

beforeEach(function () {
  this.sinon = sinon.sandbox.create();
  global.document = jsdom.jsdom();
  global.window = document.defaultView;
  global.navigator = window.navigator; // required by getIEVersion
  global.getComputedStyle = window.getComputedStyle; // reqiured by textarea-caret
});

afterEach(function () {
  delete global.getComputedStyle;
  delete global.window;
  delete global.document;
  this.sinon.restore();
});

['unit', 'integration'].forEach(name => {
  const files = fs.readdirSync(path.join(__dirname, name));

  for (let i = 0; i < files.length; i++) { 
    const file = files[i];
    if (/_spec.js$/.test(file)) {
      require(path.join(__dirname, name, file));
    }
  }
});
