import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  ContainedActionBtn,
  TextInputLabel,
  TextInput,
} from "../../Components";

const Form = (props) => {
  const [formData, setFormData] = useState({
    movieTitle: "",
    movieSummary: "",
    movieYear: "",
    movieCast: "",
    movieGenre: "",
    movieRating: "",
    movieDirector: "",
    movieWriter: "",
    movieImg: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_MOVIE",
      payload: {
        id: uuidv4(),
        title: formData.movieTitle,
        year: formData.movieYear,
        genre: formData.movieGenre,
        rating: formData.movieRating,
        director: formData.movieDirector,
        writer: formData.movieWriter,
        cast: formData.movieCast,
        summary: formData.movieSummary,
        imageURL: formData.movieImg,
      },
    });
    props.closeModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <TextInputLabel labelText="Title:">
          <TextInput
            inputType="text"
            inputName="movieTitle"
            inputHandle={handleInputChange}
          />
        </TextInputLabel>

        <TextInputLabel labelText="Summary:">
          <textarea
            className="border-1 border-[#ddd]"
            name="movieSummary"
            onChange={handleInputChange}
          />
        </TextInputLabel>
        <div className="flex gap-2">
          <TextInputLabel labelText="Year:">
            <TextInput
              inputType="number"
              inputName="movieYear"
              inputHandle={handleInputChange}
            />
          </TextInputLabel>
          <TextInputLabel labelText="Cast:">
            <TextInput
              inputType="text"
              inputName="movieCast"
              inputHandle={handleInputChange}
            />
          </TextInputLabel>
          <TextInputLabel labelText="Genre:">
            <TextInput
              inputType="text"
              inputName="movieGenre"
              inputHandle={handleInputChange}
            />
          </TextInputLabel>
        </div>

        <select
          defaultValue=""
          //   value={state.rating}
          className="border px-2 py-1 rounded-md border-[#aaa]"
          onChange={handleInputChange}
          name="movieRating"
        >
          <option value="">Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <TextInputLabel labelText="Director:">
          <TextInput
            inputType="text"
            inputName="movieDirector"
            inputHandle={handleInputChange}
          />
        </TextInputLabel>

        <TextInputLabel labelText="Writer:">
          <TextInput
            inputType="text"
            inputName="movieWriter"
            inputHandle={handleInputChange}
          />
        </TextInputLabel>

        <TextInputLabel labelText="Image URL:">
          <TextInput
            inputType="url"
            inputName="movieImg"
            inputHandle={handleInputChange}
          />
        </TextInputLabel>
      </div>
      <ContainedActionBtn>ADD MOVIE</ContainedActionBtn>
    </form>
  );
};

export default Form;
