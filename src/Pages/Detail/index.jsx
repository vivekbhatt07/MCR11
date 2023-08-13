import React from "react";
import { ContainedActionBtn, PageContainer } from "../../Components";
import { useParams } from "react-router-dom";
import { useData } from "../../Context";

const Detail = () => {
  const { movieId } = useParams();
  const { state } = useData();
  console.log(state, movieId);
  const getMovie = state.moviesList.find((currentMovie) => {
    return currentMovie.id == movieId;
  });

  // const {
  //   id,
  //   title,
  //   year,
  //   genre,
  //   rating,
  //   director,
  //   writer,
  //   cast,
  //   summary,
  //   imageURL,
  // } = props;

  return (
    <PageContainer>
      <div className="h-[350px] flex p-4 gap-4 border border-[#ddd] mx-auto mt-8">
        <div className="">
          <img
            src={getMovie.imageURL}
            alt={getMovie.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">{getMovie.title}</h3>
            <p className="text-stone-500">{getMovie.summary}</p>
            <p className="flex gap-4">
              <strong>Year:</strong>
              <span>{getMovie.year}</span>
            </p>
            <p className="flex gap-4">
              <strong>Genre:</strong>
              <span>{getMovie.genre.join(",  ")}</span>
            </p>
            <p className="flex gap-4">
              <strong>Rating:</strong>
              <span>{getMovie.rating}</span>
            </p>
            <p className="flex gap-4">
              <strong>Director:</strong>
              <span>{getMovie.director}</span>
            </p>
            <p className="flex gap-4">
              <strong>Writer:</strong>
              <span>{getMovie.cast}</span>
            </p>
          </div>
          <div className="flex gap-4">
            <ContainedActionBtn>Star</ContainedActionBtn>
            <ContainedActionBtn>Add to Watchlist</ContainedActionBtn>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Detail;
