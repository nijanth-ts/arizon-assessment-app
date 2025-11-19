export default function QtyButton({ disabled, onClick, children }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        px-3 py-1 border rounded transition select-none
        ${
          disabled
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-gray-100 cursor-pointer"
        }
      `}
    >
      {children}
    </button>
  );
}
