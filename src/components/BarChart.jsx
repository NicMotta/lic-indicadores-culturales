import { Title, BarChart } from "@tremor/react";

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
];

export default function BarChartComponent () {

  return (
    <div className="max-w-xl p-3">
      <Title>Titulo</Title>
      <BarChart
        data={chartdata}
        index="name"
        categories={["Number of threatened species"]}
        colors={["blue"]}
        yAxisWidth={48}
      />
    </div>
)}