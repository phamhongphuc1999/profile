'use client';

import { DivProps } from '@peter-present/led-caro';
import Image from 'next/image';
import Link from 'next/link';
import VibeBox, { VibeContent } from 'src/components/box/VibeBox';
import { DiamondIcon, RocketIcon } from 'src/components/icons';
import { CredentialType, PositionType } from 'src/globals';

type InfoComponentProps = {
  credentialId: string;
  credentialUrl: string;
  skills: CredentialType['skills'];
  issueDate: CredentialType['issueDate'];
} & DivProps;

function InfoComponent(params: InfoComponentProps) {
  const { credentialId, credentialUrl, skills, issueDate, ...props } = params;
  const { month, year } = issueDate;

  function onScrollClick(id: string) {
    const element = document.getElementById(id);
    const position = element?.getBoundingClientRect();
    if (position && typeof window !== 'undefined') {
      window.scrollTo({
        left: position.left,
        top: position.top + window.scrollY - 60,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div {...props}>
      <Link href={credentialUrl} target="_blank" rel="noreferrer">
        <p className="text-gray-50">{`Issued ${month} ${year}`}</p>
        <p className="text-gray-50">{`Credential ID ${credentialId}`}</p>
      </Link>
      <Link
        href={credentialUrl}
        target="_blank"
        rel="noreferrer"
        className="border-[rgba(255, 255, 255, 0.5)] mt-4 mb-2 inline-flex cursor-pointer items-center gap-x-2 border-[1px] px-2 py-1"
      >
        <p className="text-gray-50">Show credential</p>
        <RocketIcon width={16} height={16} />
      </Link>
      <div className="flex items-center gap-x-1">
        <DiamondIcon width={16} height={16} />
        <div className="flex items-center gap-x-4">
          {skills.map((skill) => {
            return (
              <button
                key={skill.id}
                className="hover-text text-gray-50"
                onClick={() => onScrollClick(`skill-${skill.id}`)}
              >
                {skill.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

type Props = CredentialType & { mouse: PositionType };

export default function Item(params: Props) {
  const { id, name, credentialId, credentialUrl, skills, issueDate, issuingOrganization, mouse } =
    params;
  const { icon, name: nameOrganization } = issuingOrganization;

  return (
    <VibeBox mouse={mouse}>
      <VibeContent
        containerProps={{ className: 'p-[1rem] credential-magical-item' }}
        id={`certification-${id}`}
      >
        <div className="credential-item">
          <div className="credential-item-item1">
            <Link href={credentialUrl} target="_blank" rel="noreferrer">
              <Image src={icon} alt={nameOrganization} className="h-[48px] w-[48px]" />
            </Link>
          </div>
          <div className="credential-item-item2">
            <Link href={credentialUrl} target="_blank" rel="noreferrer">
              <p className="hover-text font-semibold">{name}</p>
              <p>{nameOrganization}</p>
            </Link>
            <InfoComponent
              className="credential-info-component"
              credentialId={credentialId}
              credentialUrl={credentialUrl}
              skills={skills}
              issueDate={issueDate}
            />
          </div>
        </div>
        <InfoComponent
          className="credential-info-component-small"
          credentialId={credentialId}
          credentialUrl={credentialUrl}
          skills={skills}
          issueDate={issueDate}
        />
      </VibeContent>
    </VibeBox>
  );
}
