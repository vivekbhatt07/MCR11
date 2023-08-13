import React from "react";
import { ContainedActionBtn } from "../Actions";
import { Link } from "react-router-dom";

const Card = (props) => {
  const {
    id,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
  } = props;
  return (
    <Link to={`/movies/${id}`}>
      <div className="p-4 border border-[#ddd] rounded-md flex flex-col gap-3">
        <div className="h-[200px]">
          <img
            src={imageURL}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3>{title}</h3>
          <p>{summary}</p>
          <div className="flex gap-4">
            <ContainedActionBtn
              handleClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              Star
            </ContainedActionBtn>
            <ContainedActionBtn
              handleClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              Add to Watchlist
            </ContainedActionBtn>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
