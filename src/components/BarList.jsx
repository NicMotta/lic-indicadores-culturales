import { BarList, Title } from "@tremor/react";

export default function BarListComponent (props) {
  return (
  <div className="w-full shadow p-5 rounded bg-white">
    <Title className="mb-2 text-sm font-bold">{props.title}</Title>
    <BarList color="indigo" data={props.data} />
  </div>
)};