import React from "react";
import {
  PageContainer,
  Header,
  Filter,
  ContainedActionBtn,
  Card,
} from "../../Components";
import { useData } from "../../Context";

const Landing = () => {
  const { state, dispatch } = useData();

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 300px))",
    gap: "16px",
  };

  // style={gridStyle}
  return (
    <PageContainer>
      <div className="w-full">
        <Header />
        <div className="flex p-4 justify-between">
          <span className="text-xl">Movies</span>
          <Filter />
          <ContainedActionBtn>Add a Movie</ContainedActionBtn>
        </div>

        <ul style={gridStyle}>
          {state.moviesList.map((currentMovie) => {
            return <Card key={currentMovie.id} {...currentMovie} />;
          })}
        </ul>
      </div>
    </PageContainer>
  );
};

export default Landing;
