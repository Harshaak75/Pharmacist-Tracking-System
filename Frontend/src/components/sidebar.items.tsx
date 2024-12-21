
interface Buttonui {
    ItemName: string;
    style: string;
    called: () => void;  
}

export function SidebarItems({ItemName, style, called}: Buttonui){

    return <div className="hover:bg-gray-200 rounded-md transition-all">
        <div className={style}><button onClick={called} className="text-xl">{ItemName}</button> </div>
    </div>
}