import { DivProps, styleMerge } from '@peter-present/led-caro';
import { CSSProperties } from 'react';
import { ButtonColorType } from 'src/globals';

const ColorConfig: { [key1 in ButtonColorType]: { r: number; g: number; b: number } } = {
  purple: { r: 199, g: 120, b: 221 },
  gray: { r: 255, g: 255, b: 255 },
  orange: { r: 173, g: 102, b: 54 },
  blue: { r: 28, g: 104, b: 243 },
};

interface Props extends DivProps {
  color?: ButtonColorType;
}

export default function ColorfulBox({ color = 'purple', ...props }: Props) {
  const _color = {
    '--r': ColorConfig[color].r,
    '--g': ColorConfig[color].g,
    '--b': ColorConfig[color].b,
  } as CSSProperties;

  return (
    <div
      {...styleMerge(
        { className: 'relative isolate inline-block cursor-pointer overflow-hidden' },
        props
      )}
    >
      <div className="glowing-box-animations">
        <div className="glowing-box-glow glowing-box-base-color-bg" style={_color} />
        <div className="glowing-box-stars-masker">
          <div className="glowing-box-stars glowing-box-base-color-bg" style={_color} />
        </div>
      </div>
      <div className="glowing-box-borders-masker">
        <div className="glowing-box-borders glowing-box-base-color-bg" style={_color} />
      </div>
      <div className="glowing-box-button glowing-box-button-base-color-bg" style={_color}>
        {props.children}
      </div>
    </div>
  );
}
