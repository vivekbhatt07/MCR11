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

const Landing = () => {
  const { state, dispatch, filteredMovieList } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          <ModalProvider
            modalTitle="ADD MOVIE"
            isOpen={isModalOpen}
            closeModal={closeModal}
            modalBtnVariant={
              <ContainedActionBtn handleClick={openModal}>
                ADD A MOVIE
              </ContainedActionBtn>
            }
          >
            <Form closeModal={closeModal} />
          </ModalProvider>
        </div>

        <ul style={gridStyle}>
          {filteredMovieList.map((currentMovie) => {
            return <Card key={currentMovie.id} {...currentMovie} />;
          })}
        </ul>
      </div>
    </PageContainer>
  );
};

export default Landing;
