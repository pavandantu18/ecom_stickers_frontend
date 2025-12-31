export default function PageTitle({ title }) {
  return (
    <h1 className="text-3xl font-extrabold text-center
      bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      {title}
    </h1>
  );
}
