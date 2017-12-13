import '../../polyfills';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HomePage from '../HomePage';

Enzyme.configure({ adapter: new Adapter() });

describe('<HomePage />', () => {
  it('renders content', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.text()).toContain('Home sweet home');
  });
});
