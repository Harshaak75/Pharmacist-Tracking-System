interface ButtonUi {
  style: string;
  title: string;
  type?: "submit" | "reset";
  onclick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
}

export function Button(props: ButtonUi) {

  const handleclick = props.onclick ? props.onclick : () =>{};

  return (
    <button onClick={handleclick} type={props.type} className={props.style}>
      {props.title}
    </button>
  );
}
