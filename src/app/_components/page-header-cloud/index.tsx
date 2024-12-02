export default function Index() {
  return (
    <div className="relative z-0 h-[600px] overflow-hidden mb-[-172px]">
      <div className="relative w-full h-[400px] overflow-visible -z-50">
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
    <div className="absolute left-[50%] translate-x-[-800px] top-[300px] z-[10]">
      <div className="absolute w-[1200px] h-[800px] bg-[var(--color-background-main)] rounded-[50%]" />
    </div>
  );
};
const Cloud2 = () => {
  return (
    <div className="absolute left-[50%] translate-x-[250px] top-[400px] z-[10]">
      <div className="absolute w-[500px] h-[600px] top-[-40px] bg-[var(--color-background-main)] rounded-[50%] -rotate-[30deg]" />
      <div className="absolute w-[400px] h-[300px] left-[200px] top-[-80px] bg-[var(--color-background-main)] rounded-[50%]" />
      <div className="absolute w-[600px] h-[400px] left-[120px] top-[50px] bg-[var(--color-background-main)] rounded-[50%]" />
      <div className="absolute w-[600px] h-[400px] left-[-120px] top-[100px] bg-[var(--color-background-main)] rounded-[50%]" />
    </div>
  );
};
const Cloud3 = () => {
  return (
    <div className="relative left-[50%] translate-x-[-900px] top-[220px] z-[10]">
      <div className="absolute w-[600px] h-[400px] bg-[var(--color-background-main)] rounded-[50%]" />
      <div className="absolute w-[700px] h-[400px] top-[100px] left-[-200px] bg-[var(--color-background-main)] rounded-[50%]" />
    </div>
  );
};

const Cloud4 = () => {
  return (
    <div className="absolute left-[50%] translate-x-[250px] top-[200px] z-[8]">
      <div className="absolute w-[500px] h-[600px] top-[-40px] bg-[var(--color-cloud-secondary)] rounded-[50%] -rotate-[30deg]" />
      <div className="absolute w-[600px] h-[400px] left-[-300px] top-[50px] bg-[var(--color-cloud-secondary)] rounded-[50%]" />
    </div>
  );
};

const Cloud5 = () => {
  return (
    <div className="absolute left-[50%] translate-x-[-2000px] top-[300px] z-[8]">
      <div className="absolute w-[800px] h-[500px] bg-[var(--color-cloud-secondary)] rounded-[50%]" />
      <div className="absolute w-[600px] h-[600px] left-[100px] top-[100px] bg-[var(--color-cloud-secondary)] rounded-[50%]" />
      <div className="absolute w-[600px] h-[400px] left-[500px] top-[-50px] bg-[var(--color-cloud-secondary)] rounded-[50%]" />
      <div className="absolute w-[700px] h-[500px] left-[330px] top-[150px] bg-[var(--color-cloud-secondary)] rounded-[50%]" />
      <div className="absolute w-[800px] h-[500px] left-[600px] top-[100px] bg-[var(--color-cloud-secondary)] rounded-[50%]" />
    </div>
  );
};
const Cloud6 = () => {
  return (
    <div className="absolute left-[50%] translate-x-[650px] top-[300px] z-[8]">
      <div className="absolute w-[800px] h-[500px] bg-[var(--color-cloud-secondary)] rounded-[50%]" />
      <div className="absolute w-[600px] h-[600px] left-[100px] top-[100px] bg-[var(--color-cloud-secondary)] rounded-[50%]" />
      <div className="absolute w-[600px] h-[400px] left-[500px] top-[-50px] bg-[var(--color-cloud-secondary)] rounded-[50%]" />
      <div className="absolute w-[700px] h-[500px] left-[330px] top-[150px] bg-[var(--color-cloud-secondary)] rounded-[50%]" />
      <div className="absolute w-[800px] h-[500px] left-[600px] top-[100px] bg-[var(--color-cloud-secondary)] rounded-[50%]" />
    </div>
  );
};
const Cloud7 = () => {
  return (
    <div className="absolute left-[50%] translate-x-[-400px] top-[180px] z-[8]">
      <div className="absolute w-[500px] h-[600px] top-[-40px] bg-[var(--color-cloud-secondary)] rounded-[50%] -rotate-[30deg]" />
      <div className="absolute w-[600px] h-[400px] left-[-300px] top-[50px] bg-[var(--color-cloud-secondary)] rounded-[50%]" />
    </div>
  );
};
const Cloud8 = () => {
  return (
    <div className="absolute left-[50%] translate-x-[-200px] top-[120px] z-[6]">
      <div className="absolute w-[500px] h-[600px] top-[-40px] bg-[var(--color-cloud-amin)] rounded-[50%] -rotate-[30deg]" />
      <div className="absolute w-[400px] h-[300px] left-[200px] top-[-80px] bg-[var(--color-cloud-amin)] rounded-[50%]" />
    </div>
  );
};

const Cloud9 = () => {
  return (
    <div className="absolute left-[50%] translate-x-[-1400px] top-[200px] z-[6]">
      <div className="absolute w-[800px] h-[600px] bg-[var(--color-cloud-amin)] rounded-[50%]" />
      <div className="absolute w-[500px] h-[400px] left-[-20px] top-[-80px] bg-[var(--color-cloud-amin)] rounded-[50%]" />
      <div className="absolute w-[400px] h-[400px] left-[-200px] top-[00px] bg-[var(--color-cloud-amin)] rounded-[50%]" />
      <div className="absolute w-[400px] h-[400px] left-[500px] top-[100px] bg-[var(--color-cloud-amin)] rounded-[50%]" />
    </div>
  );
};

const Cloud10 = () => {
  return (
    <div className="absolute left-[50%] translate-x-[-740px] top-[160px] z-[6]">
      <div className="absolute w-[500px] h-[600px] left-[-100px] top-[-120px] bg-[var(--color-cloud-amin)] rounded-[50%] -rotate-[30deg]" />
      <div className="absolute w-[400px] h-[300px] left-[200px] top-[-60px] bg-[var(--color-cloud-amin)] rounded-[50%]" />
    </div>
  );
};
const Cloud11 = () => {
  return (
    <div className="absolute left-[50%] translate-x-[600px] top-[240px] z-[6]">
      <div className="absolute w-[500px] h-[600px] left-[-100px] top-[-120px] bg-[var(--color-cloud-amin)] rounded-[50%] -rotate-[30deg]" />
      <div className="absolute w-[400px] h-[300px] left-[200px] top-[-60px] bg-[var(--color-cloud-amin)] rounded-[50%]" />
    </div>
  );
};

const Light = () => {
  return (
    <div className="absolute w-full aspect-square bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-sky-500 to-sky-50" />
  );
};

const Sky = () => {
  return (
    <div className="absolute w-full h-[600px] z-[5] bg-[var(--color-sky-main)]" />
  );
};
