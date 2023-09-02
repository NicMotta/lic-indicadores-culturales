import { Title, Text } from "@tremor/react";

export default function RatingBarComponent (props) {
  const {min, average, max} = props.data
  return (
    <div className="max-w-xl shadow p-5 rounded bg-white">
      <Title className="mb-2 text-sm font-bold">{props.title}</Title>
      <div className="flex justify-evenly items-center">
        <div>
        <Text className="text-base">Mínimo: <span className="font-bold">{min}</span></Text>
        <hr />
        <Text className="text-base">Máximo: <span className="font-bold">{max}</span></Text>
        </div>
        <div className="flex flex-col items-center">
          <Text color="blue" className="text-base">Promedio:</Text>
          <Text color="blue" className="text-xl font-bold">{average}</Text>
        </div>
      </div>
    </div>
)};