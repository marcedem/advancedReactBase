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

/*
  global.document = new JSDOM('<!doctype html><html><body></body></html>');
  global.window = global.document.window;
  global.navigator = global.window.navigator;
*/
const doc = new JSDOM('<!doctype html><html><body></body></html>');
const win = doc.window;

global.document = win.document;
global.window = win;

const $ = _$(win);

// const $ = _$(global.document.window);


chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};
