import { CategoryBar, Title } from "@tremor/react";
import StarIcon from '/assets/star.svg';
import StarLineIcon from '/assets/star-line.svg';

const stars = [0, 1, 2, 3, 4];

export default function RatingBarComponent (props) {
  return (
    <div className="w-full md:w-[48%] max-h-32 shadow p-5 rounded bg-white">
      <Title className="mb-2 text-sm font-bold">{props.title}</Title>
      <div className="flex gap-2">
        {stars.map((star) => (
          <img className="w-6 yello" src={star <= props.data ? StarIcon : StarLineIcon} alt="star" />
          ))}
      <p className="text-yellow-400">{`| ${props.data}/5`}</p>
      </div>
    </div>
)};