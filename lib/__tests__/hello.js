import {expect} from 'chai';
import Hello from '../';
import {shallow} from 'enzyme';
/* eslint-disable no-unused-vars */
import sinon from 'sinon';
/* eslint-disable no-unused-vars */
import React from 'react';
const {describe, it} = global;

describe('Example', () => {
  describe('basic feature', () => {
    it('should pass', () => {
      const el = shallow(<Hello />);
      expect(el.html()).to.match(/Hello world/);
    });
  });
});
