import Link from 'next/link';
import ColorfulBox from 'src/components/box/ColorfulBox';
import VibeBox, { VibeContent } from 'src/components/box/VibeBox';
import { PositionType, ProjectType } from 'src/globals';
import RelevantSkills from '../skills/RelevantSkills';

type Props = ProjectType & { mouse: PositionType };

export default function Item(params: Props) {
  const { technologies, title, description, links, mouse } = params;
  const DescriptionComponent = description;

  return (
    <VibeBox mouse={mouse}>
      <VibeContent mode="simple">
        <RelevantSkills skills={technologies} />
      </VibeContent>
      <VibeContent mode="simple" className="pt-0" containerProps={{ className: 'p-[1rem]' }}>
        <p className="text-medium text-[24px]">{title}</p>
        <div className="mt-[1rem]">
          <DescriptionComponent />
        </div>
        {links && (
          <div className="mt-[1rem]">
            {links?.map((link) => {
              return (
                <Link key={link.id} href={link.to} target="_blank" rel="noreferrer">
                  <ColorfulBox
                    className="mr-[8px]"
                    color={link.color}
                  >{`${link.symbol} ${link.title}`}</ColorfulBox>
                </Link>
              );
            })}
          </div>
        )}
      </VibeContent>
    </VibeBox>
  );
}
