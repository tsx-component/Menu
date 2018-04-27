import React from 'react';
import { render } from 'enzyme';
import renderToJson from 'enzyme-to-json';
import Menu from '../src';

describe('basic', () => {
  it('base.', () => {
    const wrapper = render(
      <Menu options={['233']} defaultIndex={0} show={true} font='fa'/>
    );
    expect(renderToJson(wrapper as any)).toMatchSnapshot();
  });
});
