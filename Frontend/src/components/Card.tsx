import { Person } from "../icons/Person";

export const Card = ({
  title,
  count,
  icon,
  menuIcon,
}: {
  title: string;
  count: number;
  icon: JSX.Element;
  menuIcon: JSX.Element;
}) => (
  <div className="w-full lg:w-72 h-36 bg-white rounded-md flex justify-between items-center p-3 shadow-xl mt-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
  {/* Left Section (Title and Count) */}
  <div className="flex flex-col justify-evenly h-full">
    {/* Title */}
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-md flex items-center justify-center shadow-xl bg-white">
        <Person width="30" height="30" />
      </div>
      <p className="font-mono text-sm font-semibold text-gray-700 truncate w-full">{title}</p>
    </div>
    
    {/* Count */}
    <div className="flex items-center justify-center text-4xl font-mono text-gray-900">{count}</div>
  </div>
  
  {/* Right Section (Menu Icon & Other Content) */}
  <div className="flex flex-col justify-between h-full">
    {/* Menu Button */}
    <div className="flex justify-end">
      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
        {menuIcon}
      </button>
    </div>
    
    {/* Icon */}
    <div className="p-2 text-gray-600">{icon}</div>
  </div>
</div>
);