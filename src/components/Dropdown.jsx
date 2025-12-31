export default function Dropdown({ label, options, selectedValue, handleSort }) {
  return (
    <div className="flex items-center gap-3 font-primary">
      <label className="text-lg font-semibold text-primary dark:text-accent">
        {label}
      </label>
      <select
        value={selectedValue}
        onChange={(e) => handleSort(e.target.value)}
        className="px-4 py-2 rounded-lg border border-border dark:border-darkborder
        bg-white dark:bg-darkcard text-text dark:text-light
        focus:ring-2 focus:ring-primary transition"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
