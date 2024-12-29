import { useSpring, animated } from "react-spring";

export function SpringTable({ column, data, title }: any) {
  return (
    <div className="w-[98.5%] bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl p-2 font-semibold">{title}</h2>
      </div>

      <div className="p-5">
        <table className="w-full" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {column.map((col: any, index: any) => (
                <th
                  key={index}
                  className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b-2 border-gray-200"
                  style={{
                    backgroundColor: "#f3f4f6",
                    borderTopLeftRadius: index === 0 ? "10px" : "",
                    borderTopRightRadius:
                      index === column.length - 1 ? "10px" : "",
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row: any, index: any) => (
              <AnimatedRow
                row={row}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AnimatedRow({ row }: any) {
  const props = useSpring({
    to: { opacity: 1, transform: "translateY(0px)" },
    from: { opacity: 0, transform: "translateY(20px)" },
  });

  return (
    <animated.tr
      style={{
        ...props,
        
      }}
      className="transition-all duration-300 ease-in-out hover:bg-blue-700"
    //   className="hover:bg-blue-600" // Tailwind hover effect for smooth background change
    >
      {row.map((cell: any, index: any) => (
        <td
          key={index}
          className="px-4 py-3 text-sm border border-gray-300 rounded-lg transition-colors duration-200 "
          style={{
            backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff", // alternate row colors
          }}
        >
          {cell}
        </td>
      ))}
    </animated.tr>
  );
}
