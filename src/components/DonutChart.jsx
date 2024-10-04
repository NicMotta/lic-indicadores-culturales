import { Title, DonutChart, Text } from "@tremor/react";

export default function DonutChartComponent(props) {

  return(
    <div className="w-full md:w-[48%] shadow p-5 rounded bg-white">
    <Title className="mb-2 text-black text-base font-bold">{props.title}</Title>
      <div className="flex items-center">
      <DonutChart
        className="mt-2 w-1/2"
        data={props.data}
        category="value"
        index="name"
        colors={["violet", "rose", "indigo", "cyan", "amber"]}
      />
      <div className="flex flex-col w-1/2 text-center">
        <Text className="text-lg" color="violet">Sí: <span className="font-bold">{props.data[0].value}</span></Text>
        <Text className="text-lg" color="rose">No: <span className="font-bold">{props.data[1].value}</span></Text>
      </div>
      </div>
    </div>
  )}