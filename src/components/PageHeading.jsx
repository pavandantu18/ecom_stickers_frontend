import PageTitle from "./PageTitle";

export default function PageHeading({ title, children }) {
  return (
    <div className="max-w-[576px] mx-auto text-center py-8">
      <PageTitle title={title} />
      <p className="mt-4 text-lg text-text-muted dark:text-gray-400 font-primary">
        {children}
      </p>
    </div>
  );
}
