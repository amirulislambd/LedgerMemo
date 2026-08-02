type CardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function Card({ title, description, children }: CardProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
}
