export default function Champ({
  label,
  name,
  type = "text",
  value,
  erreur,
  onChange,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border-2 rounded-xl px-4 py-2 focus:outline-none transition ${
          erreur
            ? "border-red-400 focus:border-red-500"
            : "border-gray-200 focus:border-sky-400"
        }`}
      />

      {erreur && (
        <p className="text-red-500 text-sm mt-1">
          ⚠️ {erreur}
        </p>
      )}
    </div>
  );
}