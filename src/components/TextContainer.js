import React, { useState } from "react";

export default function TextContainer(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnSubmit = () => {
    setText(text.toUpperCase());
    props.showAlert("Convert Into Upper Case");
  };
  const handleOnSubmitLower = () => {
    setText(text.toLowerCase());
    props.showAlert("Convert Into Lower Case");
  };
  const clearText = () => {
    setText("");
  };
  const [text, setText] = useState("");
  return (
    <div className="container">
      <div className="mb-3 mt-4">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Write a Paragraph
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          onChange={handleOnChange}
          value={text}
        ></textarea>
        <button
          type="button"
          onClick={handleOnSubmit}
          className="btn btn-primary mt-3"
        >
          Covert to UpperCase
        </button>
        <button
          type="button"
          onClick={handleOnSubmitLower}
          className="btn btn-danger mt-3 ms-2"
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          onClick={clearText}
          className="btn btn-warning mt-3 ms-2"
        >
          Clear Text
        </button>
      </div>
      <h2>Your Paragraph Summary</h2>
      <p>
        {
          text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length
        }{" "}
        <b>words</b> and {text.length} <b>characters</b>
      </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  );
}
