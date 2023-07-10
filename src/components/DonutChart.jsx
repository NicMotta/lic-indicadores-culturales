import { Title, DonutChart } from "@tremor/react";

const cities = [
  {
    name: "Sí",
    sales: 2,
  },
  {
    name: "No",
    sales: 1,
  },
];

export default function DonutChartComponent() {

  return(
    // <Card className="max-w-sm">
    <div className="max-w-sm p-3 my-10">
      <Title>Para gestionar la residencia, ¿contás con un equipo de trabajo estable?</Title>
      <DonutChart
        className="mt-2"
        data={cities}
        category="sales"
        index="name"
        colors={["violet", "rose", "indigo", "cyan", "amber"]}
      />
      </div>
    // </Card>
  )}