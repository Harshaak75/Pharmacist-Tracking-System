interface Persontype {
  width: string;
  height: string;
}

export function Person(props: Persontype){

    return <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" width={props.width} height={props.height} fill="currentColor" className="bi bi-person-fill text-green-600" viewBox="0 0 16 16">
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  </svg>
}