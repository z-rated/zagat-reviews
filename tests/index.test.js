/* eslint-disable padded-blocks */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/app';
import Graph from '../client/src/components/graph';
import Header from '../client/src/components/header';
import Scores from '../client/src/components/scores';

Enzyme.configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;


describe('An Enzyme suite to test React\'s functionality', () => {

  it('should have a \'Header\' submodule', () => {
    const wrapper = shallow(<App />);
    let test = wrapper.find('.headerz');
    expect(test).toHaveLength(1);
  });

  it('should have a \'Graph\' submodule', () => {
    const wrapper = shallow(<App />);
    let test = wrapper.find('.graphz');
    expect(test).toHaveLength(1);
  });

  it('should have a \'Scores\' submodule', () => {
    const wrapper = shallow(<App />);
    let test = wrapper.find('.scorez');
    expect(test).toHaveLength(1);
  });
});

it('should have a \'currentRestaurant\' property in its state', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().currentRestaurant).toBeDefined();
});

it('should have 8 key-value pairs on it\'s state\'s \'currentRestaurant\' property in its state', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().currentRestaurant.name).toBeDefined();
  expect(wrapper.state().currentRestaurant.type).toBeDefined();
  expect(wrapper.state().currentRestaurant.location).toBeDefined();
  expect(wrapper.state().currentRestaurant.price).toBeDefined();
  expect(wrapper.state().currentRestaurant.decorScore).toBeDefined();
  expect(wrapper.state().currentRestaurant.foodScore).toBeDefined();
  expect(wrapper.state().currentRestaurant.serviceScore).toBeDefined();
  expect(wrapper.state().currentRestaurant.description).toBeDefined();
});
