export default function SearchBox({ label, placeholder, value, handleSearch }) {
  return (
    <div className="flex items-center gap-3 flex-1 font-primary">
      <label className="text-lg font-semibold text-primary dark:text-accent">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-lg border border-border dark:border-darkborder 
        bg-white dark:bg-darkcard text-text dark:text-light
        focus:ring-2 focus:ring-primary outline-none transition"
      />
    </div>
  );
}
