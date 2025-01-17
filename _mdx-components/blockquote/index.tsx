import H1 from '../h1';
import P from '../p';
import UL from '../ul';
import './index.scss';

enum EnumMode {
  Primary = 'primary',
  Danger = 'danger',
  Warning = 'warning',
}

const renderH1 = (string: string, index: number) => {
  return (
    <P key={index} className={'blockquote-h1'}>
      {string}
    </P>
  );
};

const renderP = (string: string, index: number) => {
  return (
    <P key={index} className="blockquote-p">
      {string}
    </P>
  );
};

const computeMode = (originalChildren: any[]) => {
  const hasModeChild = originalChildren.find(
    (item: any) => item?.props?.children
  );
  const mode = hasModeChild?.props?.children?.trim() || '';
  const isModeInclude = Object.values(EnumMode).includes(mode);
  return isModeInclude ? mode : EnumMode.Primary;
};

export default function Blockquote(props: { children?: any }): JSX.Element {
  const children: any = [];
  props.children.forEach((child: any, index: number) => {
    const originalChildren = child?.props?.children;
    if (child.type === H1) {
      children.push(renderH1(originalChildren, index));
    } else if (child.type === P) {
      children.push(renderP(originalChildren, index));
    } else if (child.type === UL) {
      const mode = computeMode(originalChildren);
      // TODO 不用mode不同样式
    }
  });
  return <blockquote className="blockquote">{children}</blockquote>;
}
