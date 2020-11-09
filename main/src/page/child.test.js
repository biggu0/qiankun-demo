import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import Child from './child.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Child', () => {
  it('component should mount', async () => {
    let wrapper;
    
    await act(async () => {
      wrapper = shallow(<Child/>);
    });

    expect(wrapper.exists('span')).toEqual(true);
  });
});
