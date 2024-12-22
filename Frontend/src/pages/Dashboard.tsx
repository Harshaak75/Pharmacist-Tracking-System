
import { CartDownArror } from "../icons/cartDownArrow";
import { DoctorIcon } from "../icons/Doctor";
import { Person } from "../icons/Person";

export function Dashboard() {
  const card_data = {
    Representative: {
      count: 76,
      icon: <Person />,
    },
    Doctors: {
      count: 49,
      icon: <DoctorIcon />,
    },
    Suppliers: {
      count: 12,
      icon: <DoctorIcon />,
    },
    Medicine: {
      count: 72,
      icon: <DoctorIcon />,
    },
  };

  return (
    <div className="bg-gray-100 h-[100vh]">
      <div className="ml-64 flex justify-end p-3">
        <div className="flex justify-center items-center gap-3">
          <div className="user_photo w-11 h-11 rounded-full bg-red-300"></div>
          <div className="username flex justify-center items-center gap-1">
            username {<CartDownArror />}
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="">
          <h1 className="font-sans text-3xl ml-3">Welcome to MedTrackPro</h1>
        </div>
        <div className=" flex gap-8">
          {Object.keys(card_data).map((key) => {
            // Type assertion to let TypeScript know that `key` is a valid key of `card_data`
            const typedKey = key as keyof typeof card_data;
            return (
              <div
                key={key}
                className="w-72 h-40 bg-white rounded-md flex justify-between items-center p-3 shadow-xl mt-8 ml-3"
              >
                <div className="flex flex-col gap-3 pl-4">
                  <div className="count text-5xl">
                    {card_data[typedKey].count}
                  </div>
                  <div className="about_count text-lg">
                    <p className="text-gray-800 text-xl">{key}</p>
                  </div>
                </div>
                <div>{card_data[typedKey].icon}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
