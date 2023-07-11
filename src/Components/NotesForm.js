
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "../Redux/action";

export default function NotesForm() {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmission(e) {
    e.preventDefault();
    dispatch(addNote(title, content));
    setTitle("");
    setContent("");
    navigate("/allNotes");
  }

  return (
    <>
      <div class="d-flex justify-content-around" id="main">
        <div id="bg">
          <button
            className="button-2"
            id="notebtn"
            onClick={() => navigate("/allNotes")}
          >
            My Notes
          </button>
          <h1 >Notes App</h1>


          <form id="form" onSubmit={handleSubmission}>
            <div className="form-text">
              Title  <br />
              <input
                type="text"
                name="title"
                className="box-1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <br />
              Content  <br />
              <textarea
                type="text"
                name="content"
                rows="6"
                cols="74"
                className="box-2"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />{" "}
              <br />
              <br />
            </div>
            <button class="button-32">Add note</button>

          </form>
        </div>
      </div>
    </>
  );
}

