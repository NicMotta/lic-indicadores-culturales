import { BarList, Title } from "@tremor/react";

export default function BarListComponent (props) {
  return (
  <div className="w-full shadow p-5 rounded bg-white">
    <Title className="mb-2 text-black text-base font-bold">{props.title}</Title>
    <BarList color="indigo" data={props.data} />
    {props.other?.length > 0 &&
      <div className="mt-2">
        <hr />
        <p className="text-sm font-bold mt-2">Otros:</p>
        {props.other?.map((other, index) => (
          <p key={index} className="text-sm uppercase">{other}</p>
        ))}
      </div>
      }
  </div>
)};