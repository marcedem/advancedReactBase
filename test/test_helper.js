import React from 'react';
import ReactDOM from 'react-dom';
import _$ from 'jquery';
import TestUtils from 'react-dom/test-utils';
import { JSDOM } from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

// Set up testing environrnement to run like a browser in the command line
const doc = new JSDOM('<!doctype html><html><body></body></html>');
const win = doc.window;

global.document = win.document;
global.window = win;

const $ = _$(win);

// set up chai-jquery
chaiJquery(chai, chai.util, $);

// build renderComponent helper that should render a given react class
function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

// build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};





