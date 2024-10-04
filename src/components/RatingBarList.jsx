import { CategoryBar, Title } from "@tremor/react";
import StarIcon from '/assets/star.svg';
import StarLineIcon from '/assets/star-line.svg';

const stars = [0, 1, 2, 3, 4];

export default function RatingBarComponent (props) {
  return (
    <div className="w-full shadow p-5 rounded bg-white">
    <Title className="mb-2 text-black text-base font-bold">{props.title}</Title>
      <div className="flex flex-col gap-2">
        {props.data.map((option, index) => (
          <div key={index}>
            <Title className="text-sm">{option.name}</Title>
            <div className="flex gap-2 mb-3 items-center content-center">
              { stars.map((star, index) => (
                <img key={index} className="w-7 yello" src={star < option.value ? StarIcon : StarLineIcon} alt="star" />
              ))}
            <p className="text-gray-500 text-sm">{`${option.value}/5`}</p>
            </div>
          </div>
        ))}
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