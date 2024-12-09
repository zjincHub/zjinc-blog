'use client';

export default function Index() {
  return (
    <div className="setting-switch">
      <label className="bar" htmlFor="check">
        <input type="checkbox" id="check" />
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </label>
    </div>
  );
}
