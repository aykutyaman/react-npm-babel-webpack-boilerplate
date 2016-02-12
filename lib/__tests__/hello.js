import {expect} from 'chai';
import Hello from '../';
import {shallow} from 'enzyme';
import sinon from 'sinon';
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
