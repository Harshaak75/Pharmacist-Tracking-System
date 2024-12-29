import { ResponsivePie } from "@nivo/pie";

export const PieChart = ({data}: {data: any[]}) =>(
  <div className="w-full" style={{ height: 400 }}>
  <ResponsivePie
    data={data}
    margin={{ top: 50, right: 20, bottom: 50, left: 20 }}
    innerRadius={0.6} // Emphasized donut effect
    padAngle={0.7} // Slight space between slices
    cornerRadius={10} // More rounded edges
    activeOuterRadiusOffset={12} // Increased radius on hover
    colors={{ scheme: "nivo" }} // Gradient color scheme
    borderWidth={2}
    borderColor={{ from: "color", modifiers: [["darker", 0.4]] }}
    enableArcLinkLabels={false} // Disabling arc link labels for a cleaner design
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2.5]] }}
    tooltip={({ datum }: any) => (
      <div
        style={{
          padding: "8px 12px",
          background: "rgba(0, 0, 0, 0.8)",
          color: "#fff",
          borderRadius: "6px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <strong>{datum.id}</strong>: {datum.value}
      </div>
    )}
    defs={[
      {
        id: "gradient",
        type: "linearGradient",
        colors: [
          { offset: 0, color: "#84fab0" },
          { offset: 100, color: "#8fd3f4" },
        ],
      },
    ]}
    fill={[
      { match: "*", id: "gradient" }, // Apply gradient to all slices
    ]}
    animate={true}
    motionConfig="stiff" // Smoother animation style
  />
</div>
)