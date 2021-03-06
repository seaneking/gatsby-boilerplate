import { css } from '@emotion/core';
import { subgrid } from 'satchel-css';

/** Global breakpoints */
export const BREAKPOINTS = {
  mobile: '35em'
};

/** Typesets */
export const TYPESETS = {};

/** Subgrid with page container inheritence */
export const subPageGrid = css`
  ${subgrid}
  & > * {
    grid-column: 2 / 3;
  }
`;
