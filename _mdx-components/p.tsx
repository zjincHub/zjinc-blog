export default function P(props: { children?: any; className?: string }): any {
  return (
    <p
      className={
        'm-0 tracking-wide text-base leading-relaxed text-gray-600 ' +
          props.className || ''
      }>
      {props.children}
    </p>
  );
}
