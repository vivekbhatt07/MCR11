import React, { useState } from "react";
import {
  PageContainer,
  Header,
  Filter,
  ContainedActionBtn,
  Card,
  ModalProvider,
  Form,
} from "../../Components";
import { useData } from "../../Context";

const WatchList = () => {
  const { state, dispatch } = useData();

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 300px))",
    gap: "16px",
  };

  return (
    <PageContainer>
      <div className="w-full">
        <Header />
        <ul style={gridStyle}>
          {state.watchList.map((currentMovie) => {
            return <Card key={currentMovie.id} {...currentMovie} isWatch />;
          })}
        </ul>
      </div>
    </PageContainer>
  );
};

export default WatchList;
