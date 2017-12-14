import '../../polyfills';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { HelloWorld } from '../HelloWorld';

Enzyme.configure({ adapter: new Adapter() });

describe('<HelloWorld />', () => {
  it('renders loading', () => {
    const data = { loading: true };
    const wrapper = shallow(<HelloWorld login="loading" data={data} />);
    expect(wrapper.text()).toContain('Loading');
  });

  it('renders GraphQL error', () => {
    const data = {
      loading: false,
      error: {
        graphQLErrors: [{ message: 'Our custom GraphQL error' }]
      }
    };
    const wrapper = shallow(<HelloWorld login="loading" data={data} />);
    expect(wrapper.text()).toContain('Our custom GraphQL error');
  });

  it('renders network error', () => {
    const data = {
      loading: false,
      error: { message: 'Our custom network error' }
    };
    const wrapper = shallow(<HelloWorld login="loading" data={data} />);
    expect(wrapper.text()).toContain('Our custom network error');
  });

  it('renders user name', () => {
    const data = {
      loading: false,
      user: {
        login: 'cat',
        name: 'Dirty Cat'
      }
    };
    const wrapper = shallow(<HelloWorld login="cat" data={data} />);
    expect(wrapper.text()).toContain('Hello Dirty Cat');
  });
});
