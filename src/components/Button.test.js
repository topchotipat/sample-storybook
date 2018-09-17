import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('test button', () => {
    const defaultProps = {
      isVisible: true,
      isAlertModal: true,
    }
  
    const wrapper = shallow(<Button {...defaultProps} />)
    const instance = wrapper.instance()
  
    it('call button', () => {
      expect(wrapper).toHaveLength(1)
    })
  })
  