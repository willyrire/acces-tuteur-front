const MenuItem = ({ label, icon: Icon, onClick, active, danger }) => (
  <li>
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-4 py-2 rounded-lg transition
        ${active ? "bg-blue-600 text-white" : "hover:bg-gray-200"}
        ${danger && !active ? "text-red-600 hover:bg-red-100" : ""}
      `}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  </li>
);

export default MenuItem;