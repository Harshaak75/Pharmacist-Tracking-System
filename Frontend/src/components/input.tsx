interface InputUi {
  type: string;
  name: string;
  placeholder?: string;
  label: string;
  reff?: React.Ref<HTMLInputElement>;
}

export function Input(props: InputUi) {
  return (
    <div className="">
      <label className="text-green-600">{props.label}</label>
      <input
      ref={props.reff}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-200"
      />
    </div>
  );
}
