type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-[#941c1e] uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-zinc-600">{description}</p>
    </div>
  );
}
