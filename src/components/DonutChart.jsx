import { Title, DonutChart } from "@tremor/react";

export default function DonutChartComponent(props) {

  return(
    <div className="max-w-md shadow p-5 rounded bg-white">
      <Title className="mb-2 text-sm font-bold">{props.title}</Title>
      <DonutChart
        className="mt-2"
        data={props.data}
        category="value"
        index="name"
        colors={["violet", "rose", "indigo", "cyan", "amber"]}
      />
    </div>
  )}