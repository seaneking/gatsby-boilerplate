import { css } from '@emotion/core';
import React from 'react';
import { getTrackBackground, Range as ReactRange } from 'react-range';

export type RangeProps = {
  /** Value of the range input */
  value: number;
  /** Value display formatter */
  formatValue?(value: number): string;
  /** Callback to call on value change */
  onChange?(value: number): void;
} & Partial<ReactRange['props']>;

/**
 * Custom range input
 */
export function Range({
  value = 0,
  min = 0,
  max = 100,
  onChange,
  ...props
}: RangeProps) {
  return (
    <ReactRange
      values={[value]}
      onChange={(values: number[]) => onChange && onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          css={css`
            height: 4px;
            width: 100%;
            border-radius: 4px;
            background: ${getTrackBackground({
              min,
              max,
              values: [value],
              colors: ['var(--color-primary)', 'var(--color-grey-100)']
            })};
          `}
          {...{ min, max, ...props }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          css={css`
            position: relative;
            height: 1.5rem;
            width: 1.5rem;
            border-radius: var(--radius-round);
            background: var(--color-primary);
            transform: translateY(-50%);
            outline: none !important;
          `}
          {...props}
        />
      )}
      {...props}
    />
  );
}
