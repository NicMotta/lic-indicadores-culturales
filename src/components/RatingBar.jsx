import { Title } from "@tremor/react";
import StarIcon from '/assets/star.svg';
import StarLineIcon from '/assets/star-line.svg';

const stars = [0, 1, 2, 3, 4];

export default function RatingBarComponent (props) {
  return (
    <div className="w-full md:w-[48%] max-h-32 shadow p-5 rounded bg-white">
    <Title className="mb-2 text-black text-base font-bold">{props.title}</Title>
      <div className="flex gap-2 items-center">
        {stars.map((star) => (
          <img key={star} className="w-7 yello" src={star < props.data ? StarIcon : StarLineIcon} alt="" />
          ))}
      <p >{`${props.data}/5`}</p>
      </div>
      {props.other?.length > 0 &&
      <>
        <hr />
        <p className="text-sm font-bold mt-2">Otros:</p>
        {props.other?.map((other, index) => (
          <p key={index} className="text-sm uppercase">{other}</p>
        ))}
      </>
      }
    </div>
)};