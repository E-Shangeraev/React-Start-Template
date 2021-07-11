import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

const setUp = (props) => shallow(<Button {...props} />);

const props = {
  type: null,
  color: null,
  outlined: false,
  children: 'Button',
  onClick: () => {},
};

describe('Button component', () => {
  it('should render button element', () => {
    const component = setUp(props);
    const button = component.find('.button');
    expect(button).toHaveLength(1);
  });
});
