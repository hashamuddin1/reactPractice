import React, { useState } from "react";

export default function TextContainer() {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnSubmit = () => {
    setText(text.toUpperCase());
  };
  const [text, setText] = useState("Enter Your Text");
  //text = "new text";//WRONG WAY TO CHANGE THE STATE
  return (
    <div>
      <div className="mb-3 mt-4 container">
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
      </div>
    </div>
  );
}
