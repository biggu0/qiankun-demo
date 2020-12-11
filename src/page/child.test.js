import React from 'react'
import { shallow } from 'enzyme'
import { act } from 'react-dom/test-utils'
import Child from './child.jsx'

describe('Child', () => {
  it('component should mount', async () => {
    let wrapper

    await act(async () => {
      wrapper = shallow(<Child />)
    })

    expect(wrapper.exists('span')).toEqual(true)
  })
})
