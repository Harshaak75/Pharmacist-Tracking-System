import { MenuIcon } from "../icons/Menu";
import { TrendingDown } from "../icons/TrendingUp";
import { Static } from "../icons/static";
import { UpIcon } from "../icons/upIcon";
import { SpringTable } from "../components/SpringTable";
import { Card } from "../components/Card";
import { BarChart } from "../components/BarChart";
import { PieChart } from "../components/PieChart";

export function Report() {
  const card_info = {
    card1: {
      title: "Total Visit",
      count: 9986,
      icon: <TrendingDown />,
      menuicon: <MenuIcon />,
    },
    card2: {
      title: "Total Doctors",
      count: 160,
      icon: <UpIcon />,
      menuicon: <MenuIcon />,
    },
    Suppliers: {
      title: "Total Medicine Sold",
      count: 9986,
      icon: <UpIcon />,
      menuicon: <MenuIcon />,
    },
    Medicine: {
      title: "Total Sales",
      count: 9986,
      icon: <Static />,
      menuicon: <MenuIcon />,
    },
  };

  const data = [
    { representative: "Alice", medicines: 120 },
    { representative: "Bob", medicines: 200 },
    { representative: "Charlie", medicines: 150 },
    { representative: "Diana", medicines: 180 },
    { representative: "Eve", medicines: 90 },
  ];

  const data1 = [
    {
      id: "Dolo 650 Tablet",
      label: "Dolo 650 Tablet",
      value: 30,
      color: "hsl(34, 70%, 50%)",
    },
    {
      id: "Sumo L 650 Tablet",
      label: "Sumo L 650 Tablet",
      value: 20,
      color: "hsl(88, 70%, 50%)",
    },
    {
      id: "CP 650 Tablet",
      label: "CP 650 Tablet",
      value: 40,
      color: "hsl(12, 70%, 50%)",
    },
    { id: "Others", label: "Others", value: 10, color: "hsl(211, 70%, 50%)" },
  ];

  const columns1 = ["Product Name", "Sold Items", "City"]; // Column headers

  const data3 = [
    ["Dolo 650 Tablet", 28, "Bengaluru"],
    ["Sumo L 650 Tablet", 34, "Mysore"],
    ["CP 650 Tablet", 25, "Mandya"],
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col p-4 g:ml-64 lg:ml-64">
      <div className="flex flex-wrap gap-5 lg-xl:justify-center">
        {/* Render Cards */}
        {Object.keys(card_info).map((key) => {
          const { title, count, icon, menuIcon }: any =
            card_info[key as keyof typeof card_info];
          return (
            <Card
              key={key}
              title={title}
              count={count}
              icon={icon}
              menuIcon={menuIcon}
            />
          );
        })}
      </div>
      {/* Render Bar Chart and Pie Chart */}
      <div className="flex flex-wrap gap-7 mt-10">
        <div className="border shadow-xl bg-white rounded-xl w-full sm:w-[48%] p-1">
          <BarChart data={data} />
        </div>
        <div className="border shadow-xl bg-white rounded-xl w-full sm:w-[48%] p-1">
          <PieChart data={data1} />
        </div>
      </div>
      {/* Render Table */}
      <div className="mt-10">
        <SpringTable
          column={columns1}
          data={data3}
          title={"Top Selling Products"}
          className="w-full"
        />
      </div>
    </div>
  );
}
