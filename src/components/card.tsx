import * as React from 'react';
import cx from 'classnames';

const CardImpl = function Card(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={cx(
        'bg-white shadow-sm rounded overflow-hidden',
        props.className
      )}
    />
  );
};

const CardContent = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx('p-6', props.className)} />
);

export const Card = Object.assign(CardImpl, { Content: CardContent });
