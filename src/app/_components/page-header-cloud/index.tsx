import './index.scss';

export default function Index() {
  return (
    <div className="page-header-cloud">
      <div className="inside-wrapper">
        {/* 天空 */}
        <Sky />
        {/* 第1层云层 */}
        <Cloud1 />
        <Cloud2 />
        <Cloud3 />
        {/* 第2层云层 */}
        <Cloud4 />
        <Cloud5 />
        <Cloud6 />
        <Cloud7 />
        {/* 第3层云层 */}
        <Cloud8 />
        <Cloud9 />
        <Cloud10 />
        <Cloud11 />
      </div>
    </div>
  );
}

const Cloud1 = () => {
  return (
    <div className="cloud-wrapper cloud-wrapper-1">
      <div className="cloud-child child-1" />
    </div>
  );
};

const Cloud2 = () => {
  return (
    <div className="cloud-wrapper cloud-wrapper-2">
      <div className="cloud-child child-1" />
      <div className="cloud-child child-2" />
      <div className="cloud-child child-3" />
      <div className="cloud-child child-4" />
    </div>
  );
};

const Cloud3 = () => {
  return (
    <div className="cloud-wrapper cloud-wrapper-3">
      <div className="cloud-child child-1" />
      <div className="cloud-child child-2" />
    </div>
  );
};

const Cloud4 = () => {
  return (
    <div className="cloud-wrapper cloud-wrapper-4">
      <div className="cloud-child child-1" />
      <div className="cloud-child child-2" />
    </div>
  );
};

const Cloud5 = () => {
  return (
    <div className="cloud-wrapper cloud-wrapper-5">
      <div className="cloud-child child-1" />
      <div className="cloud-child child-2" />
      <div className="cloud-child child-3" />
      <div className="cloud-child child-4" />
      <div className="cloud-child child-5" />
    </div>
  );
};

const Cloud6 = () => {
  return (
    <div className="cloud-wrapper cloud-wrapper-6">
      <div className="cloud-child child-1" />
      <div className="cloud-child child-2" />
      <div className="cloud-child child-3" />
      <div className="cloud-child child-4" />
      <div className="cloud-child child-5" />
    </div>
  );
};

const Cloud7 = () => {
  return (
    <div className="cloud-wrapper cloud-wrapper-7">
      <div className="cloud-child child-1" />
      <div className="cloud-child child-2" />
    </div>
  );
};

const Cloud8 = () => {
  return (
    <div className="cloud-wrapper cloud-wrapper-8">
      <div className="cloud-child child-1" />
      <div className="cloud-child child-2" />
    </div>
  );
};

const Cloud9 = () => {
  return (
    <div className="cloud-wrapper cloud-wrapper-9">
      <div className="cloud-child child-1" />
      <div className="cloud-child child-2" />
      <div className="cloud-child child-3" />
      <div className="cloud-child child-4" />
    </div>
  );
};

const Cloud10 = () => {
  return (
    <div className="cloud-wrapper cloud-wrapper-10">
      <div className="cloud-child child-1" />
      <div className="cloud-child child-2" />
    </div>
  );
};

const Cloud11 = () => {
  return (
    <div className="cloud-wrapper cloud-wrapper-11">
      <div className="cloud-child child-1" />
      <div className="cloud-child child-2" />
    </div>
  );
};

// const Light = () => {
//   return (
//     <div className="absolute w-full aspect-square bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-sky-500 to-sky-50" />
//   );
// };

const Sky = () => {
  return <div className="sky" />;
};
