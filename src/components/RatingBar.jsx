import { CategoryBar, Title } from "@tremor/react";

export default function RatingBarComponent (props) {
  return (
    <div className="w-full md:w-[48%] max-h-32 shadow p-5 rounded bg-white">
      <Title className="mb-2 text-sm font-bold">{props.title}</Title>
      <CategoryBar
        categoryPercentageValues={[20, 20, 20, 20, 20]}
        percentageValue={props.data}
        colors={['red', 'orange', 'yellow', 'lime', 'green']}
        className='mt-4'
      />
    </div>
)};