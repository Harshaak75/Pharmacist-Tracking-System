import { ResponsiveBar } from "@nivo/bar";

export const BarChart = ({ data }: { data: any[] }) => (
  <div className="w-full" style={{ height: 400 }}>
  <ResponsiveBar
    data={data}
    keys={["medicines"]}
    indexBy="representative"
    margin={{ top: 50, right: 20, bottom: 80, left: 40 }} // Adjusted for smaller screens
    padding={0.3} // Slightly reduced padding for better spacing
    layout="vertical"
    colors="#16a34a"
    borderRadius={5}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 30, // Rotates labels to fit smaller widths
      legend: "Representative",
      legendPosition: "middle",
      legendOffset: 50,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Medicines Sold",
      legendPosition: "middle",
      legendOffset: -30,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor="#fff"
    tooltip={({ id, value, color }) => (
      <div
        style={{
          padding: "5px 10px",
          color: "#fff",
          background: color,
          borderRadius: "4px",
        }}
      >
        <strong>{id}</strong>: {value}
      </div>
    )}
    animate={true}
    motionConfig="gentle"
    legends={[
      {
        dataFrom: "keys",
        anchor: "top-right",
        direction: "column",
        justify: false,
        translateX: 40, // Reduced translation for smaller screens
        translateY: -40,
        itemsSpacing: 5,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        symbolSize: 15, // Adjusted size for smaller screens
        symbolShape: "circle",
      },
    ]}
  />
</div>
);