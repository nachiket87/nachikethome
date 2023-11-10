export default function SimpleCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
      <div className="rounded-lg bg-black p-3.5"> {children} </div>
    </div>
  );
}
