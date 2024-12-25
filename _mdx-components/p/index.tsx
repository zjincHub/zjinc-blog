import classNames from 'classnames';
import './index.scss';

export default function P(props: {
  children?: any;
  className?: string;
}): JSX.Element {
  return <p className={classNames('p', props.className)}>{props.children}</p>;
}
