import { DivProps, twMerge } from '@peter-present/led-caro';
import { CSSProperties } from 'react';

interface Props extends DivProps {
  lineWidth?: number;
  lineProps?: DivProps;
  animationProps?: DivProps;
}

export default function AnimatedString({
  lineWidth = 50,
  lineProps,
  animationProps,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={twMerge('overflow-hidden', props.className)}
      style={{ '--width': `${lineWidth / 2}px` } as CSSProperties}
    >
      <div
        {...animationProps}
        className={twMerge(
          'animated-string-line flex h-full w-full justify-center',
          animationProps?.className
        )}
      >
        <div
          {...lineProps}
          className={twMerge('h-full', lineProps?.className)}
          style={{ width: `${lineWidth}px` }}
        />
      </div>
    </div>
  );
}
