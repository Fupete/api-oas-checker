import React from 'react';

import { render, screen } from '../test-utils.js';
import { DEFAULT_RULESET } from '../utils.mjs';
import { Menu } from './Menu.js';

describe('menu', () => {
  it('renders Menu', () => {
    render(<Menu />);
    expect(screen.queryByTestId('menu')).toBeTruthy();
  });

  it('should be disabled when a validation is in progress', () => {
    render(<Menu />, {
      initialState: { validationState: { inProgress: true, ruleset: DEFAULT_RULESET } },
    });
    const buttons = screen.queryAllByRole('button');
    expect(buttons.every((y) => y.className.includes('disabled'))).toBeTruthy();
  });
});
