import React, { useContext, useEffect, useRef, useState } from "react";
import { noteContext } from "../../context/notes/noteContext";
import NoteItem from "./noteItem/noteItem";
import AddNote from "../addNote/addNote";
import UpdateNoteCom from "../updateNote/updateNote";

function Notes(props) {
  const context = useContext(noteContext);
  const { notes, getNote } = context;
  const ref = useRef(null);
  const [note, setNote] = useState({
    id: " ",
    etitle: "",
    edescription: "",
    etag: "",
  });

  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, []);

  const updateNote = (note) => {
    ref.current.click();
    setNote({
      id: note._id,
      etitle: note.title,
      edescription: note.description,
      etag: note.tag,
    });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="col-12">
      <AddNote showAlert={props.showAlert} />

      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>
      <UpdateNoteCom
        ref={ref}
        ref1={ref.current.click()}
        showAlert={props.showAlert}
        note={note}
        onChange={onChange}
      />

      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.length === 0 && (
          <p className="text-muted">No Notes to Display</p>
        )}
        {notes.map((value) => {
          return (
            <div className="col-3" key={value._id}>
              <NoteItem
                value={value}
                updateNote={updateNote}
                showAlert={props.showAlert}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
