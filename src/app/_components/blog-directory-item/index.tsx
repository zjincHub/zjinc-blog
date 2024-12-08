'use client';
export default function Index(props: IProps) {
  const scrollToView = () => {
    const targetElementId = `#${props.value.replaceAll(' ', '_')}`;
    const element = document.querySelector(targetElementId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="mt-2 text-lg text-gray-700 cursor-pointer"
      onClick={scrollToView}>
      {props.value}
    </div>
  );
}

interface IProps {
  value: string;
}
