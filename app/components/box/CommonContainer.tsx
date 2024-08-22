import { DivProps } from 'src/globals';

export default function CommonContainer(props: DivProps) {
  return (
    <div {...props} className={`container max-[90rem] mx-auto p-5 p-[1rem] ${props?.className}`}>
      {props?.children}
    </div>
  );
}
