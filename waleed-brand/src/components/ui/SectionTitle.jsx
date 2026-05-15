export default function SectionTitle({ subtitle, children }) {
  return (
    <div className="text-center mb-16">
      <p className="text-blue-400 uppercase tracking-[0.2em] text-sm font-medium mb-4">
        {subtitle}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold gradient-text">{children}</h2>
    </div>
  );
}
