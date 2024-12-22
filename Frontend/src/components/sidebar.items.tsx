interface Buttonui {
  ItemName: string;
  style: string;
  called: () => void;
  selected: Boolean;
}

export function SidebarItems({ ItemName, style, called, selected }: Buttonui) {
  return (
    <div
      className={`hover:bg-gray-200 rounded-md transition-all ${
        selected ? "bg-gray-200" : ""
      }`}
    >
      <div className={style}>
        <button onClick={called} className="text-xl">
          {ItemName}
        </button>{" "}
      </div>
    </div>
  );
}
