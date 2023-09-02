import { Title, BarChart } from "@tremor/react";

export default function BarChartComponent (props) {

  return (
    <div className="max-w-xl p-3">
      <Title>{props.title}</Title>
      <BarChart
        data={props.data}
        index="name"
        colors={["blue"]}
        yAxisWidth={48}
      />
    </div>
)}