import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

import {
  updateTaskTitle,
} from './actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('초기화면 로딩', () => {
    const { container } = render((
      <InputContainer />
    ));

    expect(container).toHaveTextContent(/할 일/);
    expect(container).toHaveTextContent(/추가/);
  });

  context('할 일을 작성하면', () => {
    it('updateTaskTitle 액션이 dispatch 된다.', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const { getByLabelText } = render((
        <InputContainer />
      ));

      const input = getByLabelText('할 일');

      fireEvent.change(input, { target: { value: 'do something' } });

      expect(dispatch).toBeCalledWith(updateTaskTitle('do something'));
    });
  });
});
