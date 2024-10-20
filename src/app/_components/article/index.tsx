export default function Index(props: { children: React.ReactNode }) {
  return (
    <article className="article w-full bg-white max-w-[800px] m-auto">
      {props.children}
    </article>
  );
}
