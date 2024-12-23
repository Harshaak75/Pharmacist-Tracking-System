interface ButtonUi {
  style: string;
  title: string;
  type?: "submit" | "reset";
  disable?: boolean;
  onclick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
}

  export function Button(props: ButtonUi) {

    const handleclick = props.onclick ? props.onclick : () =>{};

    return (
      <button disabled={props.disable} onClick={handleclick} type={props.type} className={props.style + `${props.disable ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
        {props.title}
      </button>
    );
  }
