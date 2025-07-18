'use client';

import { DivProps } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { DEFAULT_SCALE } from 'src/configs/constance';
import { SkillsConfig, SkillsLayoutConfig } from 'src/configs/SkillConfig';
import useVibeMouses from 'src/hooks/useVibeMouses';
import Item from './item';

type SkillsLayoutProps = {
  type: 'md' | 'sm' | 'xs';
  className?: string;
};

function SkillsLayout({ type, className }: SkillsLayoutProps) {
  const { mouses, onMouseMove } = useVibeMouses();

  return (
    <CommonContainer className={className} onMouseMove={onMouseMove}>
      <CssHeading title="skills" className="cursor-pointer" />
      <div className="mt-12 grid grid-cols-12 gap-5">
        {SkillsLayoutConfig[type].map((layout, index) => {
          return (
            <div
              key={index}
              className="col-span-12 flex h-fit flex-col gap-5 sm:col-span-6 md:col-span-4"
            >
              {layout.map((itemInfo) => {
                const item = SkillsConfig[itemInfo.index];
                const mouse = mouses[itemInfo.layoutIndex] ?? DEFAULT_SCALE;

                return <Item key={item.id} mouse={mouse} {...item} />;
              })}
            </div>
          );
        })}
      </div>
    </CommonContainer>
  );
}

export default function Skills(params: DivProps) {
  return (
    <div {...params} id="skills">
      <SkillsLayout type="md" className="hidden md:block" />
      <SkillsLayout type="sm" className="hidden sm:block md:hidden" />
      <SkillsLayout type="xs" className="block sm:hidden" />
    </div>
  );
}
